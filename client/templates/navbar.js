Template.navbar.events({
  'click .saml-login': function(event, template){
    event.preventDefault();
    var provider = $(event.target).data('provider');
    Meteor.loginWithSaml({
        provider:provider
    }, function(error, result){
        //handle errors and result
    });
  },
  'click #logout': function(event, template){
    event.preventDefault();
    Meteor.logout();
  }
});

Template.navbar.helpers({
  fullUserName: function(){
    return Meteor.user().profile.fullname
  } 
});
