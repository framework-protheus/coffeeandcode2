var express = require('express');
var app = express();
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/coffeeandcode'); // connect to our database

require('./app/routes')(app);
app.use('/', express.static(__dirname+"/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
