const express = require("express");
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, cartController.addToCart);
router.get("/:userId", authMiddleware, cartController.getCart);
router.delete("/:cartItemId", authMiddleware, cartController.removeFromCart);

module.exports = router;
