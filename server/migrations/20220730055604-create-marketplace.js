'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('marketplaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.JSON
      },
      description: {
        type: Sequelize.STRING
      },
      vendor_info: {
        type: Sequelize.STRING
      },
      price: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('marketplaces');
  }
};