'use strict';

const router = require('express').Router();

var models = require('../models');

// Signup
router.post('/signup', function(req, res){
  console.log(req.body);
  res.json('heyy');
});
// signin
router.post('/signin', function(req, res){
  // lookup user
  // check if password matches
});

module.exports = router;
