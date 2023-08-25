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
  .get("/:id", getPlan)
  .patch("/:id", updatePlan)
  .get("/", getAllplans);

module.exports = planesRouter;
