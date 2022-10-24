const { Router } = require("express");
const { Temperamento } = require("../db");
const router = Router();

router.get("/", (req, res) => {
  res.send("holis soy el temperamento");
});

module.exports = router;
