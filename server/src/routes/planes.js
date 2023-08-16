const { Router } = require("express");
const planesRouter = Router();
const { createPlan, getPlan, updatePlan } = require()

planesRouter
.post("/", createPlan)
.get("/", getPlan)
.put("/:id", updatePlan)

module.exports = planesRouter;

