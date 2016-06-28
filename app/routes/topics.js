'use strict';

const express = require('express');
const router = express.Router();
const topics = require('../controllers/topics.js');

module.exports = function(app, passport) {
  // router.use(passport.authenticate('local', {failureRedirect: '/register'}));

  router.get('/', topics.list);
  router.post('/', topics.new);

  app.use('/topics', router);
};