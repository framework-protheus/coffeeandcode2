import { Meteor } from 'meteor/meteor';
import '../imports/api/events.js';
import '../imports/api/topics.js';

Meteor.startup(() => {


});


/*if (Meteor.isServer()){
  Meteor.publish("topics", function () {
      return Topics.find();
  });

  Meteor.publish("Events", function () {
    return Events.find();
  });

}*/
