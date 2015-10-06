Template.listTopics.helpers({
	topics: Topics.find({}, {sort: {likes: -1, createdAt:-1}}),
	userHaveLiked: function(){
		var likers = this.likers || [];
		return likers.indexOf(Meteor.userId()) > -1;
	}
});

Template.listTopics.events({
  'click #countLike': function (event, template) {
    event.currentTarget.disable = true
    Meteor.call("topics.like", this._id)
    event.currentTarget.disable = false
  },
  'click #dislike': function (event, template) {
    event.currentTarget.disable = true
    Meteor.call("topics.dislike", this._id);
    event.currentTarget.disable = false
  },
  'click #assign': function (event, template) {
    Meteor.call("topics.assign", this._id);
  }
});
