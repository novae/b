var express = require('express');
var router = express.Router();

var Model = require('../models/Model.js');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/getAllUsers', function(req,res){
	Model.User.find({},function(err,data){
		if(err)
			console.log('error al cargar los usuarios ',err);
		res.json(data);
	})
});

module.exports = router;
