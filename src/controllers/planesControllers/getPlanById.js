const { Planes } = require("../../db");

const getPlanById = async (id) => {
  const planFound = await Planes.findByPk(id);

  if (!planFound) {
    return `No hay plan con id: ${id}`;
  }

  return planFound;
};

module.exports = getPlanById;
