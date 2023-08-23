const { Router } = require("express");
const usuarioRouter = Router();
const { getUsuario, updateUsuario, createUsuario } = require("../handlers/usuarioHandlers");

usuarioRouter
.post("/", createUsuario)
.get("/:id", getUsuario)
.put("/:id", updateUsuario)


module.exports = usuarioRouter;