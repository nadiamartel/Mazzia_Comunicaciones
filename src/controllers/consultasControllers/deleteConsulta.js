const { Consultas } = require("../../db");

const deleteConsulta = async (id) => {
  const consultaToDelete = await Consultas.findByPk(id);

  if (!consultaToDelete) {
    return `No hay consulta con id: ${id}`;
  }

  await consultaToDelete.destroy();

  return consultaToDelete;
};

module.exports = deleteConsulta;
