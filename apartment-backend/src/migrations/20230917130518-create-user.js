'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
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
      phone:{
        type: Sequelize.STRING
      },
     
      joinDate:{
        allowNull: true,
        type: Sequelize.DATE
      },
      image:{
        type: Sequelize.BLOB
      },
      groupId:{
        
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
    await queryInterface.dropTable('User');
  }
};