const { Usuario } = require("../../db");

const getUsuarioById = async (id) => {
  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    return `Usuario no encontrado con id: ${id}`;
  }

  return usuario;
};

module.exports = getUsuarioById;
