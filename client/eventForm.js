Template.eventForm.events({
	'click #submitForm': function (event, template) {  
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		var date = template.find("#date");
		var dt = new Date()
		var _m = moment(date.value)

		dt.setDate(_m.date())
		dt.setMonth(_m.month())
		dt.setYear(_m.year())
		
		Meteor.call("events.insert", dt);
		date.value ="";
}
});