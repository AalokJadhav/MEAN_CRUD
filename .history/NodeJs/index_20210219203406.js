const express = require('express');
const bodyParser = require('body-parser');

// Destructuring  Syntax
const { mongoose }  = require('./db.js');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());

app.use('/employees', employeeController);

app.listen(3000, () => console.log('Server Started at Port : 3000'));