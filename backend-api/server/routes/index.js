const patientsController = require('../controllers').patients;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Patients API!',
  }));
  app.get('/api/patients', patientsController.index);
  app.post('/api/patients', patientsController.create);
};