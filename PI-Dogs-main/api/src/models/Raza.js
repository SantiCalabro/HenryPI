const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo

  sequelize.define(
    "Raza",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      breedGroup: {
        type: DataTypes.STRING,
      },
      minYearsOfLife: {
        type: DataTypes.INTEGER,
      },
      maxYearsOfLife: {
        type: DataTypes.INTEGER,
      },
      minHeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxHeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      minWeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxWeight: {
        type: DataTypes.INTEGER,
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
