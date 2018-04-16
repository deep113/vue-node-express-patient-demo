'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discrete_Attribute = sequelize.define('discrete_attribute', {
    attribute_name: DataTypes.STRING,
    attribute_value: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    modified_by: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {});
  Discrete_Attribute.associate = function(models) {
    // associations can be defined here
  };
  return Discrete_Attribute;
};