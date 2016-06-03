'use strict';

const router = require('express').Router();

var models = require('../models');

// Signup
router.post('/signup', function(req, res){
  // validation/sanitation
  let newUser = req.body;
  // check for existing entry
  models.User
    .findOrCreate({
      where: {email: newUser.email},
      defaults: {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        password: req.body.password
      }
    })
    .spread(function(user, created){
      if (!created) {
        res.json({message: 'Sorry there is already an account with that email address.'});
      } else {
        res.json(user);
      }
    })
    .catch(function(err){
      res.json({error: err});
    });



  // // check for matching confirm password to match
  // models.User
  //   .create({
  //     first_name: req.body.firstName,
  //     last_name: req.body.lastName,
  //     email: req.body.email,
  //   })
  //   .then(function(){
  //     models.User.findAll()
  //       .then(function(allUsers){
  //         res.json({users: allUsers});
  //       })
  //       .catch(function(err){
  //         res.json({error: err});
  //       });
  //   });


});



// Signin
router.post('/signin', function(req, res){
  // lookup user
  // check if password matches
});

module.exports = router;
