'use strict'
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var topicSchema = new Schema({
    title: String
  , description: { type: String, required: true, unique: true }
});

// the schema is useless so far
// we need to create a model using it
var Topic = mongoose.model('Topic', topicSchema);

// make this available to our users in our Node applications
module.exports = Topic;
