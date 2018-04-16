const Discrete_Attribute = require('../models/').discrete_attribute;

module.exports = {

  create: function(req, res) {
    return Discrete_Attribute
      .create({
        attribute_name : req.body.name,
        attribute_value: req.body.value,
        created_by: 1,
        modified_by: 1
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  }
};