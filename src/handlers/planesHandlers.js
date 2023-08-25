const { allPlans } = require("../controllers/planesControllers/getAllPlanes");
const getPlanById = require("../controllers/planesControllers/getPlanById");

const createPlan = async (req, res) => {
  try {
  } catch (error) {}
};

const getPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const planFound = await getPlanById(id);

    if (typeof planFound === "string") {
      return res.status(404).json({ message: planFound });
    }

    res.status(200).json(planFound);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updatePlan = async (req, res) => {
  try {
  } catch (error) {}
};

const getAllplans = async (req, res) => {
  try {
    const allPlanes = await allPlans();

    if (typeof allPlanes === "string") {
      return res.status(404).json({ message: allPlanes });
    }

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
