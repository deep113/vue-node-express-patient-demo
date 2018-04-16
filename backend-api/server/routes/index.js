const PatientController = require('../controllers').Patient;
const Discrete_Attribute = require('../controllers').Discrete_Attribute;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));
  app.get('/api/patient', PatientController.index);
  app.get('/api/patient/:id', PatientController.show);
  app.post('/api/patient', PatientController.create);
  app.put('/api/patient/:id', PatientController.update);
  app.patch('/api/patient/:id', PatientController.update);
  app.delete('/api/patient/:id', PatientController.delete);
  app.post('/api/discrete_attribute', Discrete_Attribute.create);
};