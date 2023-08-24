const {
  validateConsulta,
} = require("../controllers/consultasControllers/consultasSchema");
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
  } catch (error) {}
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
