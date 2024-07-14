const express = require("express");
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, orderController.createOrder);
router.get("/:orderId", authMiddleware, orderController.getOrder);
router.get("/", authMiddleware, orderController.getAllOrders);
router.put("/:orderId", authMiddleware, orderController.updateOrder);
router.delete("/:orderId", authMiddleware, orderController.deleteOrder);

module.exports = router;
