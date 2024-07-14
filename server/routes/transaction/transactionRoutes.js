const express = require("express");
const transactionController = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, transactionController.createTransaction);
router.get(
  "/:transactionId",
  authMiddleware,
  transactionController.getTransaction
);
router.get("/", authMiddleware, transactionController.getAllTransactions);

module.exports = router;
