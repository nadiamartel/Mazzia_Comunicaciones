const { Planes } = require("../../db");

const allPlans = async () => {
  const planes = await Planes.findAll();

  if (planes.length === 0) {
    return "No existen planes";
  }

  return planes;
};

module.exports = { allPlans };
