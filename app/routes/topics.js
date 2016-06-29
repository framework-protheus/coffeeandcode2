'use strict';

const express = require('express');
const router = express.Router();
const topics = require('../controllers/topics.js');

module.exports = function(app, checkLogin) {
  router.use(checkLogin);

  router.get('/', topics.list);
  router.post('/', topics.new);

  app.use('/topics', router);
};