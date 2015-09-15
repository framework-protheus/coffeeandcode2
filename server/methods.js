Meteor.methods({
  insertTopic: function (desc, instructor) {
    // Make sure the user is logged in before inserting a task
		// if (! Meteor.userId()) {
		// 	throw new Meteor.Error("not-authorized");
		// }

		Topics.insert({
			desc: desc,
			instructor: instructor,
			likes: 0,
			createdAt: new Date()
			// owner: Meteor.userId(),
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
		var topic = Topics.findOne(topicId);
    Topics.update(topicId, { $set: { likes: topic.likes + 1} });
  }
});