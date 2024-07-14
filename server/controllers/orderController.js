const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;
  try {
    const order = await Order.create({ userId, items });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findByPk(orderId);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
