'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airports',{
      type :'foreign key',
      name :'fkey_contraint_on_cityId',
      fields :['cityId'],
      references :{
        table : 'cities',
        field :'id'
      },
      onDelete :'CASCADE',
      onUpdate :'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Airports','fkey_contraint_on_cityId');
  }
};
