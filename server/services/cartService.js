const CartItem = require("../models/CartItem");

const addToCart = async (userId, productId, quantity) => {
  const cartItem = await CartItem.create({ userId, productId, quantity });
  return cartItem;
};

const getCart = async (userId) => {
  const cartItems = await CartItem.findAll({ where: { userId } });
  return cartItems;
};

const removeFromCart = async (cartItemId) => {
  const cartItem = await CartItem.destroy({ where: { id: cartItemId } });
  return cartItem;
};

module.exports = { addToCart, getCart, removeFromCart };
