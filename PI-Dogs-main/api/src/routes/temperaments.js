const { Router } = require("express");
const { Temperamento } = require("../db.js");
const router = Router();

router.get("/", (req, res) => {
  res.send("holis soy el temperamento");
});

module.exports = router;
