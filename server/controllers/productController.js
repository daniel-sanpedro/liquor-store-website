const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { name, price, description, categoryId, imageUrl } = req.body;
  try {
    const product = await Product.create({
      name,
      price,
      description,
      categoryId,
      imageUrl,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByPk(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price, description, categoryId, imageUrl } = req.body;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.update({ name, price, description, categoryId, imageUrl });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.destroy({ where: { id: productId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
