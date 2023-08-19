const { Planes } = require("../db");

const allPlans = async () => {
  const planes = await Planes.findAll();

  return planes;
};

module.exports = { allPlans };
