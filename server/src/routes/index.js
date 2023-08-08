const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  res.send("Is working");
});

module.exports = router;