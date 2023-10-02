'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.airoplanes,{
        foreignKey :'airoplaneId',
      });

      this.belongsTo(models.airports,{
        foreignKey : 'sourceAirportId',
      });

      this.belongsTo(models.airports,{
        foreignKey : 'destinationAirportId',
      });
    }
  }
  flights.init({
    name: {
      type : DataTypes.STRING,
      allowNull :false,
    },
    airoplaneId :{ 
       type :DataTypes.INTEGER,
       allowNull :false
    },
    arrivalDate: {
      type : DataTypes.DATE,
    },
    departureDate: {
      type : DataTypes.DATE
    },
    arrivalTime:{
      type : DataTypes.TIME
    },
    departureTime:{
      type : DataTypes.TIME
    },
    sourceAirportId: {
      type : DataTypes.STRING,
      allowNull :false
    },
    destinationAirportId: {
      type: DataTypes.STRING,
      allowNull :false
    },
    capacity:{
      type : DataTypes.INTEGER
    },
    price: {
     type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};