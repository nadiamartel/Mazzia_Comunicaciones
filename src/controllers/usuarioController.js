const { Usuario } = require("../db");

const postUsuario = async({id, name, email, password })=>{
    const usuario = await Usuario.create({
        id,
        name,
        email,
        password
    })
    return usuario;
};

const infoUsuarioId = async(id)=>{
    const usuario = await Usuario.findByPk(id);
    if(!usuario) throw Error("Usuario no encontrado");
    return usuario
};

const modifUsuaurio = async({ id, name, email, password })=>{
    if(!id) throw Error("Debe proporcionar un ID para realizar el cambio");
    const usuarioUp = await Usuario.findByPk(id);

    usuarioUp.name = name || usuarioUp.name;
    usuarioUp.password = email || usuarioUp.email;
    usuarioUp.password = password || usuarioUp.password;

    await usuarioUp?.save();

    return { message: "Informacion Actualizada!" };
}



module.exports = {
    postUsuario,
    infoUsuarioId,
    modifUsuaurio
}
