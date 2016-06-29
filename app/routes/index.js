module.exports = function(app, passport) {
  require('./login')(app, passport);

  require('./topics')(app, checkLogin);
};

// route middleware to make sure a user is logged in
function checkLogin(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}