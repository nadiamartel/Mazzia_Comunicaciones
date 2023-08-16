const { Router } = require("express");
const consultasRouter = Router();
const {createConsultas, getConsultas, deleteConsultas } = require("../handlers/consultasHandlers");

consultasRouter
.post("/", createConsultas)
.get("/", getConsultas)
.delete("/:id", deleteConsultas)


module.exports = consultasRouter;
