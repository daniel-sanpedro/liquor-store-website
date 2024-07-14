const Category = require("../models/Category");

const createCategory = async (categoryData) => {
  const category = await Category.create(categoryData);
  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategory = async (categoryId) => {
  const category = await Category.findByPk(categoryId);
  return category;
};

const updateCategory = async (categoryId, updateData) => {
  const category = await Category.update(updateData, {
    where: { id: categoryId },
  });
  return category;
};

const deleteCategory = async (categoryId) => {
  const category = await Category.destroy({ where: { id: categoryId } });
  return category;
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
