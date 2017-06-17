'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shelterId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      active: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      grooming: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      size: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      noise: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      experienceReq: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      childFriendly: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dogFriendly: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      petFriendly: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Dogs');
  }
};