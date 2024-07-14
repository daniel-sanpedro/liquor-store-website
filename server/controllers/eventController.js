const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const { name, description, date, location } = req.body;
  try {
    const event = await Event.create({ name, description, date, location });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    await Event.destroy({ where: { id: eventId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
