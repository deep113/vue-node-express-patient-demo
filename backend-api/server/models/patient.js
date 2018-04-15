'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('patient', {
    name: DataTypes.STRING,
    lname: DataTypes.STRING,
    mname: DataTypes.STRING,
    ssn: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.INTEGER,
    marital_status: DataTypes.INTEGER,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.INTEGER,
    state: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    zip_code: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    user_name: DataTypes.STRING,
    photo: DataTypes.BLOB,
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
  },  {
    hooks: {
      beforeCreate: (patient) => {
        const salt = bcrypt.genSaltSync();
        patient.password = bcrypt.hashSync(patient.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    }    
});
Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};