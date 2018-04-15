'use strict';
module.exports = (sequelize, DataTypes) => {
  var patient = sequelize.define('patient', {
    name: DataTypes.STRING
  }, {});
  patient.associate = function(models) {
    // associations can be defined here
  };
  return patient;
};