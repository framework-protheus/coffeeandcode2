eventsSchema = new SimpleSchema({
	date: {
		type  : Date,
		label : "Event date"
	},
	maxTopics: {
	    type: Number,
	    autoValue: function() {
	      if (!this.maxTopics) {
	        return 1;
	      } else {
	        this.maxTopics;  // Prevent user from supplying their own value
	      }
	    }
	},
	owner: {
		type : String,
		autoValue : function(){
			return this.userId;
		}
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
	}
});

Events.attachSchema(eventsSchema);