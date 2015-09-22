var OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('home');
      } else {
      	this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
	only : ['eventForm']
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/eventForm', function () {
  this.render('eventForm');
});