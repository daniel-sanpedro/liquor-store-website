const Transaction = require("../models/Transaction");

const createTransaction = async (transactionData) => {
  const transaction = await Transaction.create(transactionData);
  return transaction;
};

const getTransaction = async (transactionId) => {
  const transaction = await Transaction.findByPk(transactionId);
  return transaction;
};

const getAllTransactions = async () => {
  const transactions = await Transaction.findAll();
  return transactions;
};

module.exports = { createTransaction, getTransaction, getAllTransactions };
