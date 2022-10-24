const { Router } = require("express");
const { Raza } = require("../db.js");
const router = Router();

router.get("/", async (req, res) => {
  //Traer la lista de perros de la API y de la DB
  let { name } = req.query;
  if (name) {
    const dogsDB = await Raza.findAll({
      where: {
        name,
      },
    });
    return res.status(200).json(dogsDB);
  }
  try {
    const dogsDB = await Raza.findAll({
      attributes: ["name", "weight"],
    });
    return res.status(200).json(dogsDB);
  } catch (e) {
    res.status(404).json("No hay razas");
  }
});

router.get("/:idRaza", async (req, res) => {
  let { idRaza } = req.params;

  const dog = await Raza.findByPk(idRaza);
  if (dog) return res.status(200).json(dog);
  else return res.status(404).send("La raza que buscas no existe");
});

router.post("/", async (req, res) => {
  let { name, height, weight, yearsOfLife } = req.body;

  if (!name || !height || !weight || !yearsOfLife) {
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
