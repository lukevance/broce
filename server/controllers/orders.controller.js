'use strict';

const router = require('express').Router();
const models = require('../models');

// GET all current orders
router.get('/', function(req, res){
  // check for admin authorization
  console.log('current orders');
  res.json({message: 'the all orders route', reqParams: req.params});
  // models.Order
  //   .findAll({
  //     where: {
  //       status: 'quote'
  //     },
  //     include:[{
  //       model: models.Order_Detail,
  //       include:[{
  //         model: models.Part
  //       }]
  //     }]
  //   })
  //   .then(function(orderList){
  //     res.json({curOrders: orderList});
  //   })
  //   .catch(function(err){
  //     res.json({error: err});
  //   });
});

// GET current orders for specified user
router.get('/:userId', function(req, res){
  console.log(req.params);
  res.json({message: 'Unfinished route: "get orders for user"', reqParams: req.params});
});

// POST new order without previous quote
router.post('/', function(req, res){
  res.json({message: 'Unfinished route: "post new order without quote info"'});
});

// POST approve new order from existing quote
router.post('/:quoteId', function(req, res){
  // check orderId param matches req.body field

  // find order by ID

    // .then update shipping fields in order

      // .then create new order_status record for order

        // .then update old order_status record as active: f

  res.json({message: 'Unfinished route: "post new order from quote"'});
});


module.exports = router;
