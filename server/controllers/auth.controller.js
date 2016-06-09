'use strict';

const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_Secret;

var models = require('../models');

// Signup
router.post('/signup', function(req, res){
  // validation/sanitation
  let newUser = req.body;
  //checkfor matching confirm emails
  if(newUser.email !== newUser.confEmail){
    res.json({message: 'Email does not match'})
  }
  // check for matching confirm password to match
<<<<<<< HEAD
  else { (newUser.password !== newUser.confPassword){
=======
  if (newUser.password !== newUser.confirmPassword){
>>>>>>> 9b3098574a1ad3ae7ed77b93d59cf19fc0a02801
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
              firstName: req.body.firstName,
              lastName: req.body.lastName,

              password: hash
            }
          })
          .spread(function(user, created){
            if (!created) {
              res.json({message: 'Sorry there is already an account with that email address.'});
            } else {
              console.log(user.dataValues);
              let userInfo = {
                firstName: user.dataValues.first_name,
                lastName: user.dataValues.last_name,
                email: user.dataValues.email
              };
              let token = jwt.sign(userInfo, secret, {expiresIn: 60*60*2});

              res.json({token: token});
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
              console.log('correct password');
              // console.log(userInfo.dataValues);

              let token = jwt.sign(userInfo.dataValues, secret, {expiresIn: 60*60*2});
              // console.log(token);
              // send signed token
              res.json({token: token});
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
