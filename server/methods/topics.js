Meteor.settings.methods.topics = {
	insert: function (desc, instructor) {
		//Make sure the user is logged in before inserting a task
		if (! Meteor.userId()) {
		 	throw new Meteor.Error("not-authorized");
		};

		Topics.insert({
			desc: desc,
			instructor: instructor,
			likes: 0
			// username: Meteor.user().username
		});
	},
	delete: function (topicsId) {
		Topics.remove(topicsId);
	},
	update: function (topicId, desc, instructor) {
		Topics.update(topicsId, { $set: { desc: desc, instructor: instructor} });
	},
	like: function (topicId) {
		var userId = Meteor.userId();
		if (!userId)
			throw new Meteor.Error("not-authorized");

		Topics.update(topicId, { $inc: { likes: 1}, $push: {likers: userId} });
	},
	dislike: function (topicId) {
		var userId = Meteor.userId();
		if (!userId)
			throw new Meteor.Error("not-authorized");

		var query = { $and : [
							 { _id   : topicId } ,
							 { likers: {$in: [userId] } }
							 ]};
		var topic = Topics.findOne(query);
		if(topic)
			Topics.update(topicId, { $inc: { likes: -1}, $pop: {likers: userId} });
	},
	assign: function(topicId) {
		var user = Meteor.user();
		if (! user)
			throw new Meteor.Error("not-authorized");

		var query = { $and : [
			{ _id   : topicId } ,
			{ "instructor._id": null }
		]};

		var topic = Topics.findOne(query);

		if(topic){
			var instructor = {
				_id  : user._id,
				name : user.username
			};
			Topics.update(topicId, {$set: {instructor : instructor}});
		}
	},
};
