Meteor.settings.methods.events = {
    insert : function(){
        //Make sure the user is logged in before inserting a task
		/*if (! Meteor.userId()) {
		 	throw new Meteor.Error("not-authorized");
		};*/
		console.log("insert")
		Events.insert({date:Date()
		});
    }
};
