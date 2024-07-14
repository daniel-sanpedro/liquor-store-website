const User = require("../models/User");

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUser = async (userId) => {
  const user = await User.findByPk(userId);
  return user;
};

const updateUser = async (userId, updateData) => {
  const user = await User.update(updateData, { where: { id: userId } });
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.destroy({ where: { id: userId } });
  return user;
};

module.exports = { getUsers, getUser, updateUser, deleteUser };
