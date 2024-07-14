const Product = require("../models/Product");

const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getProduct = async (productId) => {
  const product = await Product.findByPk(productId);
  return product;
};

const updateProduct = async (productId, updateData) => {
  const product = await Product.update(updateData, {
    where: { id: productId },
  });
  return product;
};

const deleteProduct = async (productId) => {
  const product = await Product.destroy({ where: { id: productId } });
  return product;
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
