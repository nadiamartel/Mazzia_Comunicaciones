const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("consultas", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};