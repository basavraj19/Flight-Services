'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airoplanes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.flights,{
        foreignKey :'id',
        onDelete :'CASCADE',
        onUpdate :'CASCADE'
      })
      this.hasMany(models.Seats,{
        foreignKey : 'airoplanesId',
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      })
    }
  }
  Airoplanes.init({
    ModelNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      validate: {
        min: 100,
        max: 1000
      }
    }
  }, {
    sequelize,
    modelName: 'Airoplanes',
  });
  return Airoplanes;
};