const { Planes } = require("../../db");

const postPlan = async (name, price, speed, detail) => {
  const newPlan = await Planes.create({
    name,
    price,
    speed,
    detail,
  });

  return newPlan;
};

module.exports = postPlan;
