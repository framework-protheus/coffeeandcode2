Template.miniEvent.helpers({
  topic : function(){
    var tmpl = Template.instance();
    topic = Topics.find({},
      {   limit : 1
        , skip  : tmpl.data.index
        , sort  : {likes: -1, createdAt:-1}
      }).fetch();

    if(topic.length > 0){
      topic = topic[0]
    }
    return topic;
  }
});
