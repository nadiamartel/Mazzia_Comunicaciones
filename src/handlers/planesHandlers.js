const { validatePlan } = require("../controllers/planesControllers/planSchema");
const { allPlans } = require("../controllers/planesControllers/getAllPlanes");
const getPlanById = require("../controllers/planesControllers/getPlanById");
const postPlan = require("../controllers/planesControllers/postPlan");

const createPlan = async (req, res) => {
  try {
    const valitation = validatePlan(req.body);

    if (!valitation.success) {
      return res
        .status(400)
        .json({ error: valitation.error.issues[0].message });
    }

    const { name, price, speed, detail } = valitation.data;
    const newPlan = await postPlan(name, price, speed, detail);

    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: error });
  }
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
