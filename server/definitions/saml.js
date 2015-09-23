if (!Accounts.saml) {
  Accounts.saml = {};
}

Accounts.saml.validLogin = function (samlProfile){
	if(samlProfile.nameID){
		var user = Meteor.users.findOne({'emails.address': samlProfile.nameID});
		if (!user){
			var userId = Accounts.createUser({
				username: samlProfile.firstname,
				email: samlProfile.nameID,
				profile: {
					fullname: samlProfile.firstname + " " + samlProfile.lastname
				}
    	});
			user = Meteor.users.findOne({'_id': userId});
		};
		return user;
	}
	else
		throw new Error("Could not find email on saml profile");
};
