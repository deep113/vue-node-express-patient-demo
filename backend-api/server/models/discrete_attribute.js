'use strict';
module.exports = (sequelize, DataTypes) => {
  var discrete_attribute = sequelize.define('discrete_attribute', {
    attribute_name: DataTypes.STRING
  }, {});
  discrete_attribute.associate = function(models) {
    // associations can be defined here
  };
  return discrete_attribute;
};