const Event = require("../models/Event");

const createEvent = async (eventData) => {
  const event = await Event.create(eventData);
  return event;
};

const getEvents = async () => {
  const events = await Event.findAll();
  return events;
};

const getEvent = async (eventId) => {
  const event = await Event.findByPk(eventId);
  return event;
};

const updateEvent = async (eventId, updateData) => {
  const event = await Event.update(updateData, { where: { id: eventId } });
  return event;
};

const deleteEvent = async (eventId) => {
  const event = await Event.destroy({ where: { id: eventId } });
  return event;
};

module.exports = { createEvent, getEvents, getEvent, updateEvent, deleteEvent };
