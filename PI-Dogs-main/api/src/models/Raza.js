const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  const hash = value => {
    return value + "db";
  };

  sequelize.define("Raza", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      set(value) {
        this.setDataValue("id", hash(value));
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    yearsOfLife: {
      type: DataTypes.INTEGER,
    },
  });
  // const perro = await Raza.create({
  //   id: 1,
  //   name: "Boby",
  //   height: 30.5,
  //   weight: 10.5,
  //   yearsOfLife: 10,
  // });

  // console.log(perro);
};
