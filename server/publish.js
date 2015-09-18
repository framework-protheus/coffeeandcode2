Meteor.publish("topics", function () {
  return Topics.find();
});

Meteor.publish("events", function () {
  return Events.find();
});

//{ 	date : {$gte : Date()}  }