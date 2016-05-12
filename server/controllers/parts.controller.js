'use strict';

const router = require('express').Router();

var models = require('../models');

// Get all parts list
router.get('/', function(req, res){
  models.Part
    .all()
    .then(function(partsList){
      res.json({parts: partsList});
    });
});

// Create new parts
router.post('/new', function(req, res){
  models.Part
    .create({
      number: req.body.number,
      description: req.body.description,
      cost: req.body.cost,
      price: req.body.price,
      imageURL: req.body.imageURL
    })
    .then(function(){
      models.Part.findAll()
      .then(function(allParts){
        res.json({parts: allParts});
      })
      .catch(function(err){
        res.json({error: err});
      });
    });
});
// update existing part


module.exports = router;
