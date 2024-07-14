const express = require("express");
const router = express.Router();

const authRoutes = require("./auth/authRoutes");
const cartRoutes = require("./cart/cartRoutes");
const eventRoutes = require("./events/eventRoutes");
const categoryRoutes = require("./products/categoryRoutes");
const productRoutes = require("./products/productRoutes");
const reviewRoutes = require("./products/reviewRoutes");
const orderRoutes = require("./transaction/orderRoutes");
const transactionRoutes = require("./transaction/transactionRoutes");
const usersRoutes = require("./user/usersRoutes");
const wishlistRoutes = require("./user/wishlistRoutes");

router.use("/auth", authRoutes);
router.use("/cart", cartRoutes);
router.use("/events", eventRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/orders", orderRoutes);
router.use("/transactions", transactionRoutes);
router.use("/users", usersRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
