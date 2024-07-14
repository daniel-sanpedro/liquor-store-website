const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, userController.getUsers);
router.get("/:userId", authMiddleware, userController.getUser);
router.put("/:userId", authMiddleware, userController.updateUser);
router.delete("/:userId", authMiddleware, userController.deleteUser);

module.exports = router;
