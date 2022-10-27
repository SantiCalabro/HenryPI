const { DataTypes, UUID } = require("sequelize");
module.exports = sequelize => {
  sequelize.define(
    "Temperamento",
    {
      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: Sequelize.UUIDV4,
      //   primaryKey: true,
      // },
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
