Template.newTopic.events({
  'click #submitForm': function (event, template) {  
    event.currentTarget.disable = true
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var desc = template.find("#desc");
    if (desc.value)
        Meteor.call("topics.insert", desc.value);
    desc.value ="";
    event.currentTarget.disable = false
  }
});
