const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await Cart.create({ userId, productId, quantity });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getCartItems = async (req, res) => {
  const { userId } = req.params;
  try {
    const cartItems = await Cart.findAll({ where: { userId } });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.removeFromCart = async (req, res) => {
  const { cartItemId } = req.params;
  try {
    await Cart.destroy({ where: { id: cartItemId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
