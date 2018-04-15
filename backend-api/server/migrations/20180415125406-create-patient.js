'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      lname: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      mname: {
        type: Sequelize.STRING(15)
      },
      ssn: {
        type: Sequelize.STRING(20)
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATE
      },
      gender: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      marital_status: {
        type: Sequelize.INTEGER
      },
      address1: {
        type: Sequelize.STRING(250)
      },  
      address2: {
        type: Sequelize.STRING(50)
      },
      city: {
        type: Sequelize.INTEGER
      },  
      state: {
        type: Sequelize.INTEGER
      },  
      country: {
        type: Sequelize.INTEGER
      },
      zip_code: {
        type: Sequelize.STRING(15)
      }, 
      email: {
        type: Sequelize.STRING(50)
      },  
      phone: {
        type: Sequelize.STRING(50)
      }, 
      fax: {
        type: Sequelize.STRING(50)
      }, 
      user_name: {
        unique: true,
        type: Sequelize.STRING(100)
      }, 
      password: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },   
      photo: {
        type: Sequelize.BLOB
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
    return queryInterface.dropTable('patients');
  }
};