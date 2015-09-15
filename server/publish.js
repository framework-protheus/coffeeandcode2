Meteor.publish("topics", function () {
  return Topics.find();
});