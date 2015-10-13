instructorSchema = new SimpleSchema({
  _id: {
    type: String
  },
  name: {
    type: String
  }
});

likerSchema = new SimpleSchema({
  userId: {
    type: String
  },
  likes: {
    type: Number
  }
});

topicsSchema = new SimpleSchema({
  desc: {
    type: String,
    label: "Description"
  },
  instructor: {
    type: instructorSchema,
    optional: true
  },
  likes: {
    type: Number,
    label: "Likes"
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  owner: {
    type: String,
    autoValue: function () {
      return this.userId;
    }
  },
  likers: {
    type: [likerSchema],
    optional: true,
    label: "Likers",
    defaultValue: []
  }
});
Topics.attachSchema(topicsSchema);

Topics.getLikes = function (topicId) {
  var count = 0;
  var topic = Topics.findOne(topicId);

  if (topic)
    _.each(topic.likers, function (liker) {
      count += liker.likes;
    });

  return count;
};

Topics.getLikesByUserId = function (topicId, userId) {
  var count = 0;
  var topic = Topics.findOne(topicId);

  if (topic)
    _.each(topic.likers, function (liker) {
      if (liker.userId === userId)
        count = liker.likes;
    });

  return count;
};
