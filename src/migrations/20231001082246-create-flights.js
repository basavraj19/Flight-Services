'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      airoplaneId :{ 
        type :Sequelize.INTEGER,
        allowNull :false,
        references :{
          model :'airoplanes',
          key :'id'
        },
        onDelete : 'CASCADE'
     },
      arrivalDate: {
        type: Sequelize.DATE
      },
      departureDate: {
        type: Sequelize.DATE
      },
      arrivalTime: {
        type: Sequelize.TIME
      },
      departureTime: {
        type: Sequelize.TIME
      },
      sourceAirportId: {
        type: Sequelize.STRING,
        allowNull: false,
        references :{
          model :'Airports',
          key :'code'
        },
        onDelete : 'CASCADE'
      },
      destinationAirportId: {
        type: Sequelize.STRING,
        allowNull: false,
        references :{
          model :'Airports',
          key :'code'
        },
        onDelete : 'CASCADE'
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('flights');
  }
};