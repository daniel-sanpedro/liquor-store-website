const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategories);
router.get("/:categoryId", categoryController.getCategory);
router.put("/:categoryId", categoryController.updateCategory);
router.delete("/:categoryId", categoryController.deleteCategory);

module.exports = router;
