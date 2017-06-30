var express = require('express');
var router = express.Router();

var Profile = require('../models/profiles');

router.get('/', isLoggedIn, function(req, res){
	res.render('profile');
});

function isLoggedIn(req, res, next){
	if (req.isAuthenticated())
		return next();

	res.redirect('/users/login');
}



module.exports = router;