const { Consultas } = require("../../db");

const postConsulta = async (name, phone, email, message) => {
  const newConsulta = await Consultas.create({
    name,
    phone,
    email,
    message,
  });

  return newConsulta;
};

module.exports = postConsulta;
