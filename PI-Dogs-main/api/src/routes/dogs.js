const { Router } = require("express");
const { Raza } = require("../db.js");
const router = Router();
const axios = require("axios");

const apiData = async () => {
  try {
    let getApi = await axios.get("https://api.thedogapi.com/v1/breeds");

    let dogs = getApi.data.map(el => {
      return {
        id: el.id,
        name: el.name,
        breedGroup: el.breed_group,
        temperament: el.temperament,
        yearsOfLife: el.life_span,
        minWeight: el.weight.imperial.split("-")[0],
        maxWeight: el.weight.imperial.split("-")[1],
        minHeight: el.height.imperial.split("-")[0],
        maxHeight: el.height.imperial.split("-")[1],
        image: el.image.url,
      };
    });

    return dogs;
  } catch (e) {
    console.log(e);
  }
};

const dbData = async () => {
  try {
    const dogs = await Raza.findAll();
    return dogs;
  } catch (e) {}
};

router.get("/", async (req, res) => {
  let { name } = req.query;
  const apiDogs = await apiData();
  const dbDogs = await dbData();
  const concatDogs = apiDogs.concat(dbDogs);
  if (name) {
    const byName = concatDogs.filter(el => el.name == name);
    return res.status(200).json(byName);
  }
  try {
    return res.status(200).json(concatDogs);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.get("/:idRaza", async (req, res) => {
  let { idRaza } = req.params;

  const apiDogs = await apiData();
  const dbDogs = await dbData();
  const concatDogs = apiDogs.concat(dbDogs);

  const filter = concatDogs.filter(el => el.id == idRaza);
  if (filter.length) return res.status(200).json(filter);
  else return res.status(404).send("La raza que buscas no existe");
});

router.post("/", async (req, res) => {
  let {
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    yearsOfLife,
    breedGroup,
    temperament,
  } = req.body;

  if (
    !name ||
    !minHeight ||
    !maxHeight ||
    !minWeight ||
    !maxWeight ||
    !yearsOfLife ||
    !breedGroup ||
    !temperament
  ) {
    res.status(400).json("Faltan datos");
  }
  try {
    const dog = await Raza.create(req.body);
    res.status(200).json(dog);
  } catch (e) {
    res.status(400).json("Todo mal");
  }
});

module.exports = router;
