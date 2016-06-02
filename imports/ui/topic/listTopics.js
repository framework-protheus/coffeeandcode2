import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Topics } from '../../api/topics.js';

import './listTopics.html'
import './starTopic.js'

Template.listTopics.onCreated(function (){
  var instance = this;

  instance.sort = new ReactiveVar('oldest');
  this.subscribe('topics');
  instance.autorun(function() {
    var sort = instance.sort.get();

    instance.topics = function() {
      switch(instance.sort.get()){
        case "oldest":
            query = {sort:{createdAt : 1}}
            break
        case "newest":
            query = {sort:{createdAt : -1}}
            break
        case "moreVotes":
            query = {sort:{likes : -1}}
            break
        case "lessVotes":
            query = {sort:{likes : 1}}
            break
      }
      return Topics.find({},query);
    }
  })

});

Template.listTopics.helpers({
  topics: function(){

     return Template.instance().topics();
  },
	userHaveLiked: function(){
		var likers = this.likers || [];
		return likers.indexOf(Meteor.userId()) > -1;
	},
  sort : function(){
    return Template.instance().sort.get();
  },
  selectedSortOption: function(option){
    return Template.instance().sort.get() == option? 'selected': '';
  },
  getLikes: function(topicId){
    return Topics.getLikes(topicId);
  },
  canUnassign: function(){
    return this.instructor._id === Meteor.userId();
  },
  show: function(a){
    console.log(a.count());
  }
});

Template.listTopics.events({
  'click #assign': function (event, template) {
    Meteor.call("topics.assign", this._id);
  },
  'click #unassign': function (event, template) {
    Meteor.call("topics.unAssign", this._id);
  },
  'change #listTopicsOptions': function(event, template){
    template.sort.set(event.currentTarget.value)
    //Meteor.subscribe('topics',event.currentTarget.value)
  }
});
