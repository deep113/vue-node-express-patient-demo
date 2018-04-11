console.log('Helloooo');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('', (req, res) => {
    res.send({
        time: new Date(),
        message: 'api running...'
    });
});
app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});
app.post('/login', (req, res) => {
    res.send({
        message: `Hello ${req.body.username}  and your password is ${req.body.password} `
    });
});
app.listen(process.env.PORT || 8081);