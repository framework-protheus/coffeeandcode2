Meteor.methods({
	initData: function(){
		Meteor.call("topics.insert", "servidor REST");
		Meteor.call("topics.insert", "API REST do modelos de dados MVC");
		Meteor.call("topics.insert", "EAI");
		Meteor.call("topics.insert", "Dicas de performance em ADVPL");
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


/**
* Set methods dynamic
**/
_.each(Meteor.settings.methods, function(a,b){
	var method = {}
	method[b] = a
	Meteor.methods(flatten(method,"",{}))
});
