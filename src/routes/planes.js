const { Router } = require("express");
const planesRouter = Router();
const {
  createPlan,
  getPlan,
  updatePlan,
  getAllplans,
} = require("../handlers/planesHandlers");

planesRouter
  .post("/", createPlan)
  .get("/", getPlan)
  .put("/:id", updatePlan)
  .get("/all", getAllplans);

module.exports = planesRouter;
