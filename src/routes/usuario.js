const { Router } = require("express");
const usuarioRouter = Router();
const {
  getUsuario,
  updateUsuario,
  createUsuario,
  loginHandler,
} = require("../handlers/usuarioHandlers");

usuarioRouter
  .post("/", createUsuario)
  .get("/:id", getUsuario)
  .patch("/:id", updateUsuario)
  .get("/", loginHandler);

module.exports = usuarioRouter;
