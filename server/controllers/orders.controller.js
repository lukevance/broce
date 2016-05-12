'use strict';

const router = require('express').Router();

const models = require('../models');

// show all current orders
router.get('/current', function(req, res){
  models.Order
    .findAll({
      where: {
        status: 'active'
      },
      include:[{
        model: models.Comments,
        as: 'comments',
        include:[{
          model: models.Creator,
          as: 'creator'
        }]
      }]
    })
    .then(function(orderList){
      res.json({curOrders: orderList});
    })
    .catch(function(err){
      res.json({error: err});
    });
});

// create new order
router.post('/new', function(req, res){
  models.Order
    .create({
      poNumber: req.body.poNumber,
      shippingAddress: req.body.shippingAddress,
      total: req.body.total,
      status: req.body.satus,
      note: req.body.note
    })
    .then(function(){
      models.Order
      .findAll()
      .then(function(allOrders){
        res.json({ordes: allOrders});
      })
      .catch(function(err){
        res.json({error: err});
      });
    });
});

module.exports = router;
