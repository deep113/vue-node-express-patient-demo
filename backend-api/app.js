const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const basicAuth = require('express-basic-auth')
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(basicAuth({
//   authorizer: myAsyncAuthorizer,
//   authorizeAsync: true,
// }));

// function myAsyncAuthorizer(username, password, cb) {
//   if (username.startsWith('A') && password.startsWith('secret'))
//       return cb(null, true)
//   else
//       return cb(null, true)
// }
// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;