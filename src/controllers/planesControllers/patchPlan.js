const { Planes } = require("../../db");

const patchPlan = async (id, data) => {
    const planFound = await Planes.findByPk(id);

    if (!planFound) {
      return `No hay plan con id: ${id}`;
    }
 
    planFound.set(data).save();
    return planFound;
};

module.exports = patchPlan;