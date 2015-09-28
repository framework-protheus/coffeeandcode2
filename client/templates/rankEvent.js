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
