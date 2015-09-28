Meteor.subscribe("topics");
Meteor.subscribe("events");

Template.registerHelper('formatDate', function(date) {
  var dt = new Date(date);
  return moment(dt).format('DD-MM-YYYY');
});