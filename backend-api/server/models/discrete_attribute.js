'use strict';
module.exports = (sequelize, DataTypes) => {
  var discrete_attribute = sequelize.define('discrete_attribute', {
    patient_id: DataTypes.INTEGER,
    attribute_name: DataTypes.STRING,
    attribute_value: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    modified_by: DataTypes.INTEGER
  }, {});
  discrete_attribute.associate = function(models) {
    // associations can be defined here
  };
  return discrete_attribute;
};