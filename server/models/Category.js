const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
  }
);

module.exports = Category;
