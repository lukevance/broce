'use strict';

const router = require('express').Router();
const bcrypt = require('bcrypt');

var models = require('../models');

// Signup
router.post('/signup', function(req, res){
  // validation/sanitation
  let newUser = req.body;
  // check for matching confirm password to match
  if (newUser.password !== newUser.confPassword){
    res.json({message: 'Passwords do not match.'});
  } else {
    // encrypt password
    bcrypt.hash(newUser.password, 8, function(err, hash) {
      if (err) {
        return res.json(err);
      } else {
        // check for existing entry
        models.User
          .findOrCreate({
            where: {email: newUser.email},
            defaults: {
              first_name: req.body.firstName,
              last_name: req.body.lastName,
              password: hash
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
      }
    });
  }
});



// Signin
router.post('/signin', function(req, res){
  // some sort of sanitation
  // lookup user
  models.User
    .findOne({
      where: {
        email: req.body.email      }
    })
    .then(function(userInfo){
      if (userInfo) {
        // check if password matches
        bcrypt.compare(req.body.password, userInfo.password, function(err, response){
          if (err) {
            console.log(err);
            res.json({error: err});
          } else {
            // if passwords match
            if (response === true) {
              // send signed token
              res.json({message: 'you are signed in!', user: userInfo});
            } else {
              res.json({message: 'username or password did not match'});
            }
          }
        });
      } else {
        res.json({message: 'username or password did not match'});
      }
    });
});

module.exports = router;
