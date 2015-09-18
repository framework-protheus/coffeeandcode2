Meteor.subscribe("topics");
Meteor.subscribe("events");

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


Template.rankEvent.helpers({

});

// Autorun will be executed each time this collection has change (update, delete, insert)
Template.rankEvent.onRendered(function() {
      _this = this;
      this.autorun(function() {
        //var dataContext = Template.currentData();
        _this.subscribe('events', {limit : 2})
        //_this.data.event = Events.find({},{skip: _this.data.number-1, limit : 1}).fetch()[0];
        //console.log(event);
        
      });
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});