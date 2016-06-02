import {Topics} from '../../imports/api/topics.js'
var validAndGetUser = function(){
  var user = Meteor.user();
  if (!user)
    throw new Meteor.Error("not-authorized");
  return user;
};

Meteor.settings.methods.topics = {
  insert: function (desc, instructor) {
    //Make sure the user is logged in before inserting a task
    validAndGetUser();

    Topics.insert({
      desc: desc,
      instructor: instructor,
      likes: 0
        // username: Meteor.user().username
    });
  },
  delete: function (topicsId) {
    Topics.remove(topicsId);
  },
  update: function (topicId, desc, instructor) {
    Topics.update(topicsId, {
      $set: {
        desc: desc,
        instructor: instructor
      }
    });
  },
  setLiker: function (topicId, likes) {
    var user = validAndGetUser();
    var topic = Topics.findOne(topicId);
    if (topic){
      var nUpdated = Topics.update(
        { _id: topicId, "likers.userId": user._id },
        { $set: { "likers.$.likes": likes } }
      );

      if (nUpdated === 0)
        Topics.update(topicId,
          { $push: { likers: { userId: user._id, likes: likes } } }
        );

      // Atualizo a propriedade utilizada para filtrar os tópicos pela quantidade de likes.
      var likes = Topics.getLikes(topicId);
      Topics.update(topicId, { $set: { likes: likes } } );

    };
  },
  assign: function (topicId) {
    var user = validAndGetUser();

    var query = {
      $and: [
        {_id: topicId},
        {"instructor._id": null}
		  ]
    };

    var topic = Topics.findOne(query);

    if (topic) {
      var instructor = {
        _id: user._id,
        name: user.profile.fullname || user.username || user.emails[0].address
      };
      Topics.update(topicId, {
        $set: {
          instructor: instructor
        }
      });
    }
  },
  unAssign: function (topicId) {
    var user = validAndGetUser();

    var topic = Topics.findOne({$and: [
      {_id: topicId},
      {"instructor._id": user._id}
    ]});

    if (topic)
      Topics.update(topicId, {
        $set: {
          instructor: null
        }
      });
  }
};
