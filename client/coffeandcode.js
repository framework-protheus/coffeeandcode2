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
  events : function() {
    return Events.find({},{limit:2}).map(function(event, index) {
      event.index = index
      return event;
    });
  },
  getTopicForEvent : function(eventIndex){
    topic = Topics.find({},{limit:1});
    return topic;
  }
});

Template.miniEvent.helpers({
  topic : function(){
    var tmpl = Template.instance();
    topic = Topics.find({},
      {   limit : 1
        , skip  : tmpl.data.index
        , sort  : {likes: -1, createdAt:-1}
      }).fetch();

    if(topic.length > 0){
      topic = topic[0]
    }
    return topic;
  }
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});




Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});