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
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER(2),
    },
  });

  sequelize.define("Temperamento", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
};
