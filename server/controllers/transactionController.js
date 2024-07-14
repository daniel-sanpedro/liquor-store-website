const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
  const { userId, amount, status } = req.body;
  try {
    const transaction = await Transaction.create({ userId, amount, status });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTransaction = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const transaction = await Transaction.findByPk(transactionId);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
