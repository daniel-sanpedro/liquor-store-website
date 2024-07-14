const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

class Transaction extends Model {}

Transaction.init(
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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Transaction",
  }
);

module.exports = Transaction;
