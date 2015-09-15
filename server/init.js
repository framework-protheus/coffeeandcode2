console.log("When I run?");

Meteor.startup(function () {
	// Code to run on server at startup
	console.log("Starting Coffe and Code...");
	if (Topics.find().count() === 0){
		Meteor.call("insertTopic", "servidor REST", "Felipe");
		Meteor.call("insertTopic", "API REST do modelos de dados MVC", "Felipe");
		Meteor.call("insertTopic", "EAI", "Felipe");
		Meteor.call("insertTopic", "Dicas de performance em ADVPL", "Felipe");
	};
});