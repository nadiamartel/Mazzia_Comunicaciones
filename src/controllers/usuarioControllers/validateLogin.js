const { Usuario } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_WORD } = process.env;

const validateLogin = async (email, password) => {
  const userFound = await Usuario.findOne({ where: { email: email } });

  const validatePassword = !userFound
    ? false
    : await bcrypt.compare(password, userFound.password);

  if (!(userFound && validatePassword)) {
    return "email o contrasena invalida";
  }

  const userToToken = {
    id: userFound.id,
    name: userFound.name,
  };

  const token = jwt.sign(userToToken, SECRET_WORD);

  return {
    access: true,
    name: userFound.name,
    token,
  };
};

module.exports = validateLogin;
