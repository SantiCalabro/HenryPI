const { Router } = require("express");
const { Temperamento } = require("../db.js");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
  let dbTemper = await Temperamento.findAll();

  if (dbTemper.length) {
    return res.send(dbTemper);
  } else {
    let apiTemper = await axios.get("https://api.thedogapi.com/v1/breeds");
    let mappedTemps = apiTemper.data.map(el => el.temperament);
    let joinedTemps = mappedTemps.join();
    let arr = joinedTemps.split(",");

    arr.forEach(async e => {
      await Temperamento.findOrCreate({ where: { name: e } });
      //  console.log("Si");
    });
    let find = await Temperamento.findAll();
    // const find = await Temperamento.create({ name: "Prueba" });
    // console.log(Temperamento);
    res.send(find);
  }
});

module.exports = router;
