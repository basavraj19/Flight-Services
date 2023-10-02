'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.city, {
        foreignKey: 'cityId',
      });

      this.hasMany(models.flights,{
        foreignKey: 'sourceAirportId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      this.hasMany(models.flights,{
        foreignKey: 'destinationAirportId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Airports.init({
    name: {
      type : DataTypes.STRING,
      allowNull :false,
      unique :true
    },
    code: {
      type : DataTypes.STRING,
      allowNull :false,
      unique :true
    },
    address: {
      type : DataTypes.STRING,
      unique :true
    },
    cityId: {
      type : DataTypes.INTEGER,
      allowNull :false
    }
  }, {
    sequelize,
    modelName: 'Airports',
  });
  return Airports;
};