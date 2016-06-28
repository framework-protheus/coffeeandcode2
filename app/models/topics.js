'use strict'
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var topicSchema = new Schema({
    title: { type: String, required: true }
  , description: { type: String, required: true }
});

// add Joi validation to schema
topicSchema.methods.joiValidate = function(obj, cb) {
	var Joi = require('joi');
	var schema = {
		title: Joi.string().required(),
		description: Joi.string().required(),
	}
	return Joi.validate(obj, schema, cb);
}

// the schema is useless so far
// we need to create a model using it
var Topic = mongoose.model('Topic', topicSchema);

// make this available to our users in our Node applications
module.exports = Topic;
