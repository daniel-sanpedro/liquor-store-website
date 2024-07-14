const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

module.exports = Order;
