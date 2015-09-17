instructorSchema = new SimpleSchema({
	_id : {
		type: String
	},
	name : {
		type: String
	}
});

topicsSchema = new SimpleSchema({
	desc: {
		type  : String,
		label : "Description"
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

Topics.attachSchema(topicsSchema);