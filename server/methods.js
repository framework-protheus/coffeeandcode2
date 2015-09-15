Meteor.methods({
	initData: function(){
		Meteor.call("insertTopic", "servidor REST");
		Meteor.call("insertTopic", "API REST do modelos de dados MVC");
		Meteor.call("insertTopic", "EAI");
		Meteor.call("insertTopic", "Dicas de performance em ADVPL");
	},
	insertTopic: function (desc, instructor) {
		//Make sure the user is logged in before inserting a task
		if (! Meteor.userId()) {
		 	throw new Meteor.Error("not-authorized");
		};

		Topics.insert({
			desc: desc,
			instructor: instructor || {},
			likes: 0,
			createdAt: new Date(),
			owner: Meteor.userId(),
			likers: []
			// username: Meteor.user().username
		});
  },
  deleteTopic: function (topicsId) {
    Topics.remove(topicsId);
  },
  updateTopic: function (topicId, desc, instructor) {
    Topics.update(topicsId, { $set: { desc: desc, instructor: instructor} });
  },
  like: function (topicId) {
  	if (! Meteor.userId()) {
	 	throw new Meteor.Error("not-authorized");
	};
    Topics.update(topicId, { $inc: { likes: 1}, $push: {likers: Meteor.userId()} });
  },
  dislike: function (topicId) {
  	if (! Meteor.userId()) {
	 	throw new Meteor.Error("not-authorized");
	};
	var query = { $and : [
						 { _id   : topicId } ,
						 { likers: {$in: [Meteor.userId()] } }
						 ]};
	var topic = Topics.findOne(query);
	if(topic)
    	Topics.update(topicId, { $inc: { likes: -1}, $pop: {likers: Meteor.userId()} });
  },
  assign: function(topicId) {
  	var userId = Meteor.userId();
  	if (! userId) {
		throw new Meteor.Error("not-authorized");
	};
	var query = { $and : [
					 { _id   : topicId } ,
					 { "instructor._id": null }
					 ]};
	var topic = Topics.findOne(query);

	if(topic)
		var user = Meteor.user();

		var instructor = {
			_id  : userId,
			name : user.username
		};
    	Topics.update(topicId, {$set: {instructor : instructor}});
  }
});