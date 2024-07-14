const Order = require("../models/Order");

const createOrder = async (orderData) => {
  const order = await Order.create(orderData);
  return order;
};

const getOrder = async (orderId) => {
  const order = await Order.findByPk(orderId);
  return order;
};

const getAllOrders = async () => {
  const orders = await Order.findAll();
  return orders;
};

const updateOrder = async (orderId, updateData) => {
  const order = await Order.update(updateData, { where: { id: orderId } });
  return order;
};

const deleteOrder = async (orderId) => {
  const order = await Order.destroy({ where: { id: orderId } });
  return order;
};

module.exports = {
  createOrder,
  getOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
