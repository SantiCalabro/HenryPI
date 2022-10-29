const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  const hash = value => {
    return value + "db";
  };

  sequelize.define(
    "Raza",
    {
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
      breedGroup: {
        type: DataTypes.STRING,
      },
      yearsOfLife: {
        type: DataTypes.STRING,
      },
      minHeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxHeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    },
    { timestamps: false }
  );
};
