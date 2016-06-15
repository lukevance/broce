'use strict';

const router = require('express').Router();

let models = require('../models');


// get any account and users
router.get('/:name', function(req, res){
  console.log(req.params);
  models.Account
    .findAll({
      where: {
        account_name: req.params.name
      },
      include: [{
        model: models.User
      }]
    })
    .then(function(accountInfo){
      res.json({accountInfo: accountInfo});
    })
    .catch(function(err){
      res.json({error: err});
    });
});

module.exports = router;
