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
      this.belongsTo(models.Airoplanes,{
        foreignKey :'airoplaneId',
        as : 'AiroplaneDetails'
      });

      this.belongsTo(models.Airports,{
        foreignKey : 'sourceAirportId',
        as :'sourceAirport'
      });

      this.belongsTo(models.Airports,{
        foreignKey : 'destinationAirportId',
        as :'destinationAirport'
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
    arrivalTime:{
      type : DataTypes.DATE,
      allowNull :false
    },
    departureTime:{
      type : DataTypes.DATE,
      allowNull :false
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