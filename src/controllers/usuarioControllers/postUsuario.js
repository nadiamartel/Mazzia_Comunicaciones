const { Usuario } = require("../../db");
const crypto = require("node:crypto");
const bcrypt = require("bcrypt");

const postUsuario = async (name, email, password, picture) => {
  const checkUsuario = await Usuario.findOne({ where: { email: email } });
  if (checkUsuario) {
    return "Ya existe usuario con este email";
  }

  const saltRounds = 5;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUsuario = await Usuario.create({
    id: crypto.randomUUID(),
    name,
    email,
    password: passwordHash,
    picture,
  });

  return newUsuario;
};

module.exports = postUsuario;
