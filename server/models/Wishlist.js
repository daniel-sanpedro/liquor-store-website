const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

class Wishlist extends Model {}

Wishlist.init(
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Wishlist",
  }
);

module.exports = Wishlist;
