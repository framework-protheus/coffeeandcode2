/*var OnBeforeActions = {
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
});*/

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('about');
  }
});

FlowRouter.route('/topicForm', {
  name: 'topicForm',
  action() {
    BlazeLayout.render('topicForm');
  }
});

/*FlowRouter.route('/eventForm', {
  name: 'eventForm',
  template: 'eventForm'
});



FlowRouter.route('/banner', {
  name: 'banner',
  template: 'banner'
});



FlowRouter.configure({
    layoutTemplate: 'main'
});
*/
