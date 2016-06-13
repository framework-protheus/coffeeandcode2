import {Events} from '../../imports/api/events.js';

Meteor.settings.methods.events = {
  insert: function (date) {
    //Make sure the user is logged in before inserting a task
    /*if (! Meteor.userId()) {
     	throw new Meteor.Error("not-authorized");
    };*/
    console.log("insert event at", date)
    Events.insert({
      date: date || Date()
    });
  }
};
