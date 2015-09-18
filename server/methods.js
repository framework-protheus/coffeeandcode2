Meteor.methods({
	initData: function(){
		Meteor.call("insertTopic", "servidor REST");
		Meteor.call("insertTopic", "API REST do modelos de dados MVC");
		Meteor.call("insertTopic", "EAI");
		Meteor.call("insertTopic", "Dicas de performance em ADVPL");
	},	
	makeItAdmin: function(){
		var userId = Meteor.userId();
		if (!userId)
			throw new Meteor.Error("not-authorized");

		Roles.addUsersToRoles(userId, 'admin');
	}
});



function flatten(x, prefix, agg) {
    if (typeof(x) == "function") {
        agg[prefix] = x;
    } else {
        // x is a (sub-)group
        _.each(x, function(sub, name) {
            flatten(sub, prefix + (prefix.length > 0 ? "." : "") + name, agg);
        });
    }
    return agg;
}
_.each(Meteor.settings.methods, function(a,b){
	var method = {}
	method[b] = a
	Meteor.methods(flatten(method,"",{}))
});
