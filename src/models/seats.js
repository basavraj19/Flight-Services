'use strict';
const {
  Model
} = require('sequelize');

const {Enum}=require('../utils/common');

const  {Business,Premium,Economy,FirstClass} =Enum.seatsCategory;

module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airoplanes,{
           foreignKey :'airoplanesId'
      })
    }
  }
  Seats.init({
    airoplanesId:{
      type :DataTypes.INTEGER,
      allowNull :false,
      references  :{
        model : 'Airoplanes',
        key : 'id'
      }
    },
    row :{
      type :DataTypes.INTEGER,
      allowNull : false
    },
    column :{
      type :DataTypes.STRING,
      allowNull : false
    },
     seatCategory :{
      type :DataTypes.ENUM,
      values : [Business,Premium,Economy,FirstClass],
      defaultValue : Economy
    }
  }, {
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};