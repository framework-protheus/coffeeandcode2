Meteor.subscribe("topics");

Template.listTopics.helpers({
	topics: Topics.find({}, {sort: {likes: -1}})
});

Template.listTopics.events({
  'click #countLike': function (event, template) {
    // Topics.update(this._id, {$set: {likes: this.likes + 1}});
    Meteor.call("like", this._id);
  }
});