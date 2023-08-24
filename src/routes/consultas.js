const { Router } = require("express");
const consultasRouter = Router();
const {
  createConsulta,
  getConsultas,
  deleteConsultas,
} = require("../handlers/consultasHandlers");

consultasRouter
  .post("/", createConsulta)
  .get("/", getConsultas)
  .delete("/:id", deleteConsultas);

module.exports = consultasRouter;
