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
      .all()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  update: function(req, res) {
    return Patient
      .create({
        title: req.body.title,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  create: function(req, res) {
    console.log('req.body', req.body);
    console.log('req.body', req.body.name);
    return Patient
      .create({
        name: req.body.name,
        lname: req.body.lname,
        mname: req.body.mname,
        ssn: req.body.ssn,
        dob: req.body.dob,
        gender: req.body.gender,
        marital_status: req.body.marital_status,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip_code: req.body.zip_code,
        email: req.body.email,
        phone: req.body.phone,
        fax: req.body.fax,
        user_name: req.body.user_name,
        password: req.body.password,
        photo: req.body.photo,
        created_by: req.body.created_by,
        modified_by: req.body.modified_by
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  delete: function(req, res) {
    return Patient
      .create({
        title: req.body.title,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
};