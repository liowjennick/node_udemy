var db = require ('./db.js');

module.exports.handleSignup = (email, password) => {
	// check if email exist
	db.saveUser({email, password});
	// save user
	// send welcome email 
};