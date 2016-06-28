'use strict'
const Topic = require('../models/topics.js');
const assert = require('assert');
module.exports = {
    list : function(req, res){
      // get all the users
      Topic.find({}, function(err, topics) {
        if (err) throw err;

        // object of all the users
        res.end(JSON.stringify(topics));
      });
    }
  , new : function(req, res){
    let topic = new Topic({
        title : req.body.title
      , description : req.body.description
    });
    topic.save((err)=>{
      if (err){
        res.json(err);
      }else{
        res.json(topic);
      }
    })
  }
};
