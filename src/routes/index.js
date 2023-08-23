const { Router } = require("express");
const router = Router();
const usuarioRouter = require("./usuario");
// const consultasRouter = require("./consultas");
const planesRouter = require("./planes");

router.use("/usuario", usuarioRouter);
// router.use("/consultas", consultasRouter);
router.use("/planes", planesRouter);

module.exports = router;
