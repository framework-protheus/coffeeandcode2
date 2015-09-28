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

Template.topicForm.events({
  'click #submitForm': function (event, template) {  
    event.currentTarget.disable = true
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var desc = template.find("#desc");
    Meteor.call("topics.insert", desc.value);
    desc.value ="";
    event.currentTarget.disable = false
  }
});
