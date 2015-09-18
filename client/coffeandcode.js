Meteor.subscribe("topics");

Template.listTopics.helpers({
	topics: Topics.find({}, {sort: {likes: -1, createdAt:-1}}),
	userHaveLiked: function(){
		var likers = this.likers || [];
		return likers.indexOf(Meteor.userId()) > -1;
	}
});

Template.listTopics.events({
  'click #countLike': function (event, template) {
    Meteor.call("topics.like", this._id);
  },
  'click #dislike': function (event, template) {
    Meteor.call("topics.dislike", this._id);
  },
  'click #assign': function (event, template) {
    Meteor.call("topics.assign", this._id);
  }
});

Template.topicForm.events({
  'click #submitForm': function (event, template) {  
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var desc = template.find("#desc");
    Meteor.call("topics.insert", desc.value);
    desc.value ="";
  }
});


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});