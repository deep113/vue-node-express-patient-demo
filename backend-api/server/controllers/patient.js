const Patient = require('../models').patient;

module.exports = {
  index(req, res) {
    return Patient
      .all()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  create(req, res) {
    return Patient
      .create({
        title: req.body.title,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
};