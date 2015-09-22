// Validate if a new user has the domain in Meteor.settings.domains
Accounts.validateNewUser(function (user) {
  var has

  _.each(user.emails, function (email) {

    has = false
    _.each(Meteor.settings.domains, function (domain) {
      if (domain.charAt(0) !== "@") domain = "@" + domain;
      if (email.address.indexOf(domain) >= 0)
        has = true;
    })

    if (!has)
      throw new Meteor.Error(403, "Email must be in this domains: "+Meteor.settings.domains.toString());

  })

  return true
});
