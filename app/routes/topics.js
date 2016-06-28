'use strict';
const topics = require('../controllers/topics.js');
module.exports = function(app){
  app.get('/topics', topics.list);
  app.post('/topics', topics.new);
}
