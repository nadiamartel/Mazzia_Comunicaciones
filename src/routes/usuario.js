const { Router } = require("express");
const usuarioRouter = Router();
const {
  getUsuario,
  updateUsuario,
  createUsuario,
  loginHandler,
} = require("../handlers/usuarioHandlers");
const userAuth = require("../middlewares/userAuth");

usuarioRouter
  .post("/", createUsuario)
  .get("/", userAuth, getUsuario)
  .patch("/", userAuth, updateUsuario)
  .get("/login", loginHandler);

module.exports = usuarioRouter;
