const {
  validateUsurario,
  validateUpdateUsurario,
} = require("../controllers/usuarioControllers/usuarioSchema");
const postUsuario = require("../controllers/usuarioControllers/postUsuario");
const getUsuarioById = require("../controllers/usuarioControllers/getUsuarioById");
const patchUsuario = require("../controllers/usuarioControllers/patchUsuario");
const validateLogin = require("../controllers/usuarioControllers/validateLogin");

const createUsuario = async (req, res) => {
  try {
    const validation = validateUsurario(req.body);

    if (!validation.success) {
      return res
        .status(400)
        .json({ error: validation.error.issues[0].message });
    }

    const { name, email, password, picture } = validation.data;
    const newUsuario = await postUsuario(name, email, password, picture);

    if (typeof newUsuario === "string") {
      return res.status(409).json({ error: newUsuario });
    }

    return res.status(201).json(newUsuario);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUsuario = async (req, res) => {
  try {
    const { userId } = req.body;
    const usuarioFound = await getUsuarioById(userId);

    if (typeof usuarioFound === "string") {
      return res.status(404).json({ message: usuarioFound });
    }
    return res.status(200).json(usuarioFound);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const validation = validateUpdateUsurario(req.body);

    if (!validation.success) {
      return res
        .status(400)
        .json({ error: validation.error.issues[0].message });
    }

    const { userId } = req.body;
    const usuarioUpdated = await patchUsuario(userId, validation.data);

    if (typeof usuarioUpdated === "string") {
      return res.status(404).json({ error: usuarioUpdated });
    }

    return res.status(200).json(usuarioUpdated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const validation = await validateLogin(email, password);
    if (typeof validation === "string") {
      return res.status(401).json({ access: false, message: validation });
    }

    res.status(200).json(validation);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createUsuario,
  getUsuario,
  updateUsuario,
  loginHandler,
};
