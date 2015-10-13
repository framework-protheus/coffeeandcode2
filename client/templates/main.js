Template.main.events({
  'click .saml-login': function(event, template){
    event.preventDefault();
    var provider = $(event.target).data('provider');
    Meteor.loginWithSaml({
        provider:provider
    }, function(error, result){
        //handle errors and result
    });
  },
  'click .saml-logout': function(event, template){
    event.preventDefault();
    Meteor.logout();
  }
});

Template.main.helpers({
  fullUserName: function(){
    var user = Meteor.user()
    return user.profile.fullname || user.username || user.emails[0].address; 
  } 
});
