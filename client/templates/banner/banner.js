var next = 0;

Template.banner.events({});
Template.banner.helpers({});

Template.banner_current.events({});
Template.banner_current.helpers({});

Template.banner_next.events({});
Template.banner_next.helpers({
  title: function(){
    return "Título " + ++next;
  }
});