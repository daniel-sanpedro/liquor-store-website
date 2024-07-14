const express = require("express");
const reviewController = require("../controllers/reviewController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, reviewController.createReview);
router.get("/", reviewController.getReviews);
router.get("/:reviewId", reviewController.getReview);
router.put("/:reviewId", authMiddleware, reviewController.updateReview);
router.delete("/:reviewId", authMiddleware, reviewController.deleteReview);

module.exports = router;
