eventsSchema = new SimpleSchema({
	date: {
		type  : Date,
		label : "Event date"
	},
	maxTopics: {
	    type: Number,
	    autoValue: function() {
	      if !(this.maxTopics) {
	        return 1;
	      } else {
	        this.maxTopics;  // Prevent user from supplying their own value
	      }
	    }
	},
	instructor: {
		type     : instructorSchema,
		optional : true
	},
	likes: {
		type : Number,
		label : "Likes"
	},
	createdAt: {
	    type: Date,
	    autoValue: function() {
	      if (this.isInsert) {
	        return new Date;
	      } else if (this.isUpsert) {
	        return {$setOnInsert: new Date};
	      } else {
	        this.unset();  // Prevent user from supplying their own value
	      }
	    }
	},
	owner: {
		type : String,
		autoValue : function(){
			return this.userId;
		}
	},
	likers: {
		type     : [String],
		optional : true
	}
});
console.log("leu");
Events.attachSchema(eventsSchema);