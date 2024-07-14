const Review = require("../models/Review");

const createReview = async (reviewData) => {
  const review = await Review.create(reviewData);
  return review;
};

const getReviews = async () => {
  const reviews = await Review.findAll();
  return reviews;
};

const getReview = async (reviewId) => {
  const review = await Review.findByPk(reviewId);
  return review;
};

const updateReview = async (reviewId, updateData) => {
  const review = await Review.update(updateData, { where: { id: reviewId } });
  return review;
};

const deleteReview = async (reviewId) => {
  const review = await Review.destroy({ where: { id: reviewId } });
  return review;
};

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};
