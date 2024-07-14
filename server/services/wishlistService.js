const Wishlist = require("../models/Wishlist");

const addToWishlist = async (userId, productId) => {
  const wishlistItem = await Wishlist.create({ userId, productId });
  return wishlistItem;
};

const getWishlist = async (userId) => {
  const wishlistItems = await Wishlist.findAll({ where: { userId } });
  return wishlistItems;
};

const removeFromWishlist = async (wishlistItemId) => {
  const wishlistItem = await Wishlist.destroy({
    where: { id: wishlistItemId },
  });
  return wishlistItem;
};

module.exports = { addToWishlist, getWishlist, removeFromWishlist };
