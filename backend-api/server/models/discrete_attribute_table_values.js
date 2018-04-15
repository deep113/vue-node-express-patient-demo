'use strict';
module.exports = (sequelize, DataTypes) => {
  var discrete_attribute_table_values = sequelize.define('discrete_attribute_table_values', {
    attribute_name: DataTypes.STRING
  }, {});
  discrete_attribute_table_values.associate = function(models) {
    // associations can be defined here
  };
  return discrete_attribute_table_values;
};