const { Router } = require("express");
const { Temperament } = require("../db.js");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
  let dbTemper = await Temperament.findAll();
  if (dbTemper.length) {
    return res.send(dbTemper);
  } else {
    let apiTemper = await axios.get("https://api.thedogapi.com/v1/breeds");
    let mappedTemps = apiTemper.data.map(el => el.temperament);
    let joinedTemps = mappedTemps.join();
    let arr = joinedTemps.split(",");

    arr.forEach(async e => {
      await Temperament.findOrCreate({ where: { name: e } });
    });
    let find = await Temperament.findAll();
    res.send(find);
  }

  router.get("/filter/:temp", async (req, res) => {
    let { temp } = req.query;

    const apiDogs = await apiData();
    const dbDogs = await dbData();
    const concatDogs = apiDogs.concat(dbDogs);

    const filter = concatDogs.filter(el => el.temperament == temp);
    if (filter.length) return res.status(200).json(filter);
    else return res.status(404).send("No hay temperamento");
  });
});

module.exports = router;
