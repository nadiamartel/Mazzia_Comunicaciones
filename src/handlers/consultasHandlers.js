const {
  validateConsulta,
} = require("../controllers/consultasControllers/consultasSchema");
const getAllConsultas = require("../controllers/consultasControllers/getAllConsultas");
const postConsulta = require("../controllers/consultasControllers/postConsulta");

const createConsulta = async (req, res) => {
  try {
    const validation = validateConsulta(req.body);

    if (!validation.success) {
      return res
        .status(400)
        .json({ error: validation.error.issues[0].message });
    }

    const { name, phone, email, message } = validation.data;
    const newConsulta = await postConsulta(name, phone, email, message);

    res.status(201).json(newConsulta);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getConsultas = async (req, res) => {
  try {
    const allConsultas = await getAllConsultas();
    if (typeof allConsultas === "string") {
      return res.status(404).json({ message: allConsultas });
    }

    res.status(200).json(allConsultas);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteConsultas = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  createConsulta,
  getConsultas,
  deleteConsultas,
};
