const Review = require("../models/Review");

exports.createReview = async (req, res) => {
  const { userId, productId, rating, comment } = req.body;
  try {
    const review = await Review.create({ userId, productId, rating, comment });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteReview = async (req, res) => {
  const { reviewId } = req.params;
  try {
    await Review.destroy({ where: { id: reviewId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
