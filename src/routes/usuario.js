const { Router } = require("express");
const usuarioRouter = Router();
const {
  getUsuario,
  updateUsuario,
  createUsuario,
} = require("../handlers/usuarioHandlers");

usuarioRouter
  .post("/", createUsuario)
  .get("/:id", getUsuario)
  .patch("/:id", updateUsuario);

module.exports = usuarioRouter;
