'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Member', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      description: {
        type: Sequelize.STRING
      },
      firstName:{
        type: Sequelize.STRING
      },
     lastName:{
        type: Sequelize.STRING
      },
      birthDay: {
        allowNull: true,
        type: Sequelize.DATE
      },
      sex:{
        type: Sequelize.STRING
      },
      userId:{
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
    await queryInterface.dropTable('Member');
  }
};