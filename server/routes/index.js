const express = require("express");
const authRoutes = require("./auth/authRoutes");
const cartRoutes = require("./cart/cartRoutes");
const categoryRoutes = require("./category/categoryRoutes");
const orderRoutes = require("./order/orderRoutes");
const productRoutes = require("./products/productRoutes");
const reviewRoutes = require("./review/reviewRoutes");
const transactionRoutes = require("./transaction/transactionRoutes");
const usersRoutes = require("./user/usersRoutes");
const wishlistRoutes = require("./wishlist/wishlistRoutes");
const eventRoutes = require("./events/eventRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/cart", cartRoutes);
router.use("/categories", categoryRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewRoutes);
router.use("/transactions", transactionRoutes);
router.use("/users", usersRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/events", eventRoutes);

module.exports = router;
