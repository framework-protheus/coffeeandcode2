var removeActiveFromNav = function(){
  $(".nav").find(".active").removeClass("active");
};

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
  },
  'click .nav li': function(event, template){
    removeActiveFromNav();
    $(event.target).parent().addClass("active");
  },
  'click .navbar-brand': function(event, template){
    removeActiveFromNav();
  }
});

Template.main.helpers({
  fullUserName: function(){
    var user = Meteor.user()
    return user.profile.fullname || user.username || user.emails[0].address; 
  } 
});