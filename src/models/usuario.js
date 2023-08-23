const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("usuario", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      valueDefault: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // phone: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // client: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // },
    picture: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  });
};
