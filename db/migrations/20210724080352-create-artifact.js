'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Artifacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idKey: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(1024)
      },
      embed: {
        type: Sequelize.STRING(4096)
      },
      file: {
        type: Sequelize.STRING
      },
      parentId: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Artifacts');
  }
};