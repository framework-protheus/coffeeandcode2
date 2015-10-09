Template.starTopic.rendered = function () {
  this.$('.rateit').rateit();
}

Template.starTopic.helpers({
  getLikesByUser: function (topicId) {
    return Topics.getLikesByUserId(topicId, Meteor.userId());
  }
});

Template.starTopic.events({
  'click .rateit': function (event, template) {
    event.currentTarget.disable = true;

    console.log("Value: " + $("#rateit_" + this._id).rateit("value"));

    Meteor.call('topics.setLiker', this._id, $("#rateit_" + this._id).rateit("value"));
    event.currentTarget.disable = false;
  }
});
