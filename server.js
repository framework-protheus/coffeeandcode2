'use strict'

const express = require('express');
const app = express();
const morgan  = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/coffeeandcode'); // connect to our database

require('./config/passport')(passport);

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(session({
  secret: 'codeandcoffee', // session secret
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(__dirname+"/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

require('./app/routes')(app, passport);

app.listen(PORT, function () {
  console.log('Example app listening on port %s!', PORT);
});
