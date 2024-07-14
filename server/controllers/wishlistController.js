const Wishlist = require("../models/Wishlist");

exports.addToWishlist = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const wishlist = await Wishlist.create({ userId, productId });
    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getWishlist = async (req, res) => {
  const { userId } = req.params;
  try {
    const wishlist = await Wishlist.findAll({ where: { userId } });
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { wishlistItemId } = req.params;
  try {
    await Wishlist.destroy({ where: { id: wishlistItemId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
