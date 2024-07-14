const express = require("express");
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, eventController.createEvent);
router.get("/", eventController.getEvents);
router.get("/:eventId", eventController.getEvent);
router.put("/:eventId", authMiddleware, eventController.updateEvent);
router.delete("/:eventId", authMiddleware, eventController.deleteEvent);

module.exports = router;
