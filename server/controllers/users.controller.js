'use strict';

const router = require('express').Router();

var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User
    .all()
    .then(function(usersList){
      res.json({users: usersList});
    });
});

// Create New User
router.post('/new', function(req, res, next) {
  models.User
    .create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
    .then(function(){
      models.User.findAll()
        .then(function(allUsers){
          res.json({users: allUsers});
        })
        .catch(function(err){
          res.json({error: err});
        });
    });
});

module.exports = router;
