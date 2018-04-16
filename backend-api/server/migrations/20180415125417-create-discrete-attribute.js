'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('discrete_attributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attribute_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      attribute_value: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.INTEGER
      },  
      modified_by: {
        type: Sequelize.INTEGER
      },                  
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('discrete_attributes');
  }
};