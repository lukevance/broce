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
  // check for matching confirm password to match
  if(newUser.email !== newUser.confEmail || newUser.password !== newUser.confPassword){
    res.json({message: 'Email or password does not match'});
  }
 else {
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
