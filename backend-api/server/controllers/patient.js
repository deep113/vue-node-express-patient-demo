const Patient = require('../models/').patient;

module.exports = {
  index: function(req, res) {
    return Patient
      .all()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  show: function(req, res) {
    return Patient
      .findById(req.params.id)
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  update: function(req, res) {
    return Patient
    .findById(req.params.id, {
    })
    .then(patient => {
      if (!patient) {
        return res.status(404).send({
          message: 'Patient Not Found',
        });
      }
      return patient
        .update({
          name: req.body.name || req.body.name,
          lname: req.body.lname || req.body.lname,
          mname: req.body.mname || req.body.mname,
          ssn: req.body.ssn || req.body.mname,
          dob: req.body.dob || req.body.mname,
          gender: req.body.gender || req.body.gender,
          marital_status: req.body.marital_status || req.body.marital_status,
          address1: req.body.address1 || req.body.address1,
          address2: req.body.address2 || req.body.address2,
          city: req.body.city || req.body.city,
          state: req.body.state || req.body.state,
          country: req.body.country || req.body.country,
          zip_code: req.body.zip_code || req.body.zip_code,
          email: req.body.email || req.body.email,
          phone: req.body.phone || req.body.phone,
          fax: req.body.fax || req.body.fax,
          password: req.body.password || req.body.password,
          photo: req.body.photo || req.body.photo,
          created_by: req.body.created_by || req.body.created_by,
          modified_by: req.body.modified_by || req.body.modified_by
        })
        .then(() => res.status(200).send(patient))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
  create: function(req, res) {
    return Patient
      .create({
        name: req.body.name || req.body.name,
        lname: req.body.lname || req.body.lname,
        mname: req.body.mname || req.body.mname,
        ssn: req.body.ssn || req.body.mname,
        dob: req.body.dob || req.body.mname,
        gender: req.body.gender || req.body.gender,
        marital_status: req.body.marital_status || req.body.marital_status,
        address1: req.body.address1 || req.body.address1,
        address2: req.body.address2 || req.body.address2,
        city: req.body.city || req.body.city,
        state: req.body.state || req.body.state,
        country: req.body.country || req.body.country,
        zip_code: req.body.zip_code || req.body.zip_code,
        email: req.body.email || req.body.email,
        phone: req.body.phone || req.body.phone,
        fax: req.body.fax || req.body.fax,
        user_name: req.body.user_name || req.body.user_name,
        password: req.body.password || req.body.password,
        photo: req.body.photo || req.body.photo,
        created_by: req.body.created_by || req.body.created_by,
        modified_by: req.body.modified_by || req.body.modified_by
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  delete: function(req, res) {
    return Patient
    .findById(req.params.id)
    .then(patient => {
      if (!patient) {
        return res.status(400).send({
          message: 'patient Not Found',
        });
      }
      return patient
        .destroy()
        .then((data) => res.status(201).send('ok'))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
};