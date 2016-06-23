'use strict'
const Topic = require('../models/topics.js');
module.exports = {
    list : function(req, res){
      // get all the users
      Topic.find({}, function(err, topics) {
        if (err) throw err;

        // object of all the users
        res.end(JSON.stringify(topics));
      });
    }
};
