'use strict'
const express = require('express');
const app = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/coffeeandcode'); // connect to our database

app.use('/', express.static(__dirname+"/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
