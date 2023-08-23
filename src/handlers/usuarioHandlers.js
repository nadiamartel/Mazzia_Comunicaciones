const {infoUsuarioId, modifUsuaurio, postUsuario  } = require("../controllers/usuarioController");

const createUsuario = async(req, res) =>{
    try {
        const { id, name, email, password} = req.body;
        const resp = await postUsuario({ id, name, email, password });
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(404).json({ error: error.message }) 
    }
}

const getUsuario = async(req, res) =>{
    try {
        const { id } = req.params;
        const getUsuarioId = await infoUsuarioId(id);
        return res.status(200).json(getUsuarioId)
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

const updateUsuario = async(req, res) =>{
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const resp = await modifUsuaurio({ id, name, email, password });
        return res.status(200).json(resp)
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = {
    createUsuario,
    getUsuario,
    updateUsuario
}

