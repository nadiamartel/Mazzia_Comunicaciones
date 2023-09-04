const { Router } = require("express");
const consultasRouter = Router();
const {
  createConsulta,
  getConsultas,
  deleteConsultas,
} = require("../handlers/consultasHandlers");
const userAuth = require("../middlewares/userAuth");

consultasRouter
  .post("/", createConsulta)
  .get("/", getConsultas)
  .delete("/:id", userAuth, deleteConsultas);

module.exports = consultasRouter;
