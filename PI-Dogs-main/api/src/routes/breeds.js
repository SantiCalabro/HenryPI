const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Breeds } = require("../db.js");

router.get("/", async (req, res) => {
  const apiData = await axios.get("https://api.thedogapi.com/v1/breeds");
  const breeds = await apiData.data.map(el =>
    el.breed_group ? el.breed_group : "No breed"
  );

  breeds.map(async el => {
    await Breeds.findOrCreate({
      where: {
        name: el,
      },
    });
  });

  const allBreeds = await Breeds.findAll();
  console.log(allBreeds);
  res.send(allBreeds);
});

module.exports = router;
