const { Router } = require("express");
const planesRouter = Router();
const {
  createPlan,
  getPlan,
  updatePlan,
  getAllplans,
} = require("../handlers/planesHandlers");
const userAuth = require("../middlewares/userAuth");

planesRouter
  .post("/", userAuth, createPlan)
  .get("/:id", getPlan)
  .patch("/:id", userAuth, updatePlan)
  .get("/", getAllplans);

module.exports = planesRouter;
