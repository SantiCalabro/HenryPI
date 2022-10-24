const { DataTypes } = require("sequelize");
module.exports = sequelize => {
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
