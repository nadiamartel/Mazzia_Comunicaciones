const { Usuario } = require("../../db");

const patchUsuario = async (id, data) => {
  const usuarioFound = await Usuario.findByPk(id);

  if (!usuarioFound) {
    return `No existe usuario con id: ${id}`;
  }

  usuarioFound.set(data).save();
  return usuarioFound;
};

module.exports = patchUsuario;
