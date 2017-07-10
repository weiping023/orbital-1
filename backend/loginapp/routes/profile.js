var express = require('express');
var router = express.Router();
var fs = require('fs');

var Todo = require('../models/profiles');

var event_data;

fs.readFile('../loginapp/events_data.out', 'utf8', function(err, data) {
	if(err) throw err;
	event_data = JSON.parse(data);
})

router.get('/', isLoggedIn, function(req, res){
	res.render('profile', { data: event_data });
});

function isLoggedIn(req, res, next){
	if (req.isAuthenticated())
		return next();

	res.redirect('/users/login');
}

router.post('/mark', function(req, res, next){
	var item = {
	name: req.body.name
	};
	 var data = new Todo(item);
  data.save();
});

//router.get('/get', function(req, res, next){
//	 Todo.find()
//      .then(function(doc) {
//        res.render('profile', {item: doc});
//      });
//})


module.exports = router;