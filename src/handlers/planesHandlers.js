const { allPlans } = require("../controllers/planesController");

const createPlan = async (req, res) => {
  try {
  } catch (error) {}
};

const getPlan = async (req, res) => {
  try {
  } catch (error) {}
};

const updatePlan = async (req, res) => {
  try {
  } catch (error) {}
};

const getAllplans = async (req, res) => {
  try {
    const allPlanes = await allPlans();

    res.status(200).json(allPlanes);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createPlan,
  getPlan,
  updatePlan,
  getAllplans,
};
