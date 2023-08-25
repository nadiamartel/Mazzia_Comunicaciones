const { Consultas } = require("../../db");

const getAllConsultas = async () => {
  const allConsultas = await Consultas.findAll();

  if (allConsultas.length === 0) {
    return "No hay consultas";
  }

  return allConsultas;
};

module.exports = getAllConsultas;
