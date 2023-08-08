const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("planes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    speed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};