const express = require("express");
const wishlistController = require("../controllers/wishlistController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, wishlistController.addToWishlist);
router.get("/:userId", authMiddleware, wishlistController.getWishlist);
router.delete(
  "/:wishlistItemId",
  authMiddleware,
  wishlistController.removeFromWishlist
);

module.exports = router;
