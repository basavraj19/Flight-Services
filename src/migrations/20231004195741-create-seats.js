'use strict';
/** @type {import('sequelize-cli').Migration} */

const {Enum}=require('../utils/common');

const  {Business,Premium,Economy,FirstClass} =Enum.seatsCategory;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airoplanesId:{
        type :Sequelize.INTEGER,
        allowNull :false,
        references  :{
          model : 'Airoplanes',
          key : 'id'
        }
      },
      row :{
        type :Sequelize.INTEGER,
        allowNull : false
      },
      column :{
        type :Sequelize.STRING,
        allowNull : false
      },
       seatCategory :{
        type :Sequelize.ENUM,
        values : [Business,Premium,Economy,FirstClass],
        defaultValue : Economy
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};