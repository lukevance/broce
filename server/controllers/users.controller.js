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


module.exports = router;
