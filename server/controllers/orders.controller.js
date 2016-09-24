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
  if (req.params.quoteId === req.body.id) {
    console.log(req.body);
    // update shipping fields in order
    models.Order
      .update({
        shipping_city: req.body.shipping_city,
        shipping_address: req.body.shipping_address,
        shipping_state: req.body.shipping_state,
        shipping_zip: req.body.shipping_zip
      },
      // UserId must match user id in token for success
      {
        where: {
          id: req.body.id,
          UserId: req.body.UserId
        }
      })
      .then(function(rowsUpdated){
        console.log(rowsUpdated);
        if (rowsUpdated[0] === 1){
          console.log('success');
          
          // .then create new order_status record for order

            // .then update old order_status record as active: f

          models.Order
          .findOne({
            where: {
              id: req.body.id
            }
          })
          .then(function(orderInfo){
            res.json({order: orderInfo});
          });
        } else {
          console.log('fail');
          res.json({message: 'Bad request, try again'});
        }


      })
      .catch(function(err){
        res.json({error: err});
      });

  // if param id and body id don't match
  } else {
    res.json({message: 'order id doesnt match'});
  }

});

// GET all approved orders with shipping info - admin only
router.get('/approved/shippingInfo', function(req, res) {
  // check for admin role first

  models.Order_Status
    .findAll({
      where: {
        StatusTypeId: {
          $and: {
            // if StatusTypeId is 3 or 4
            $gt: 2,
            $lt: 5
          }
        },
        // we only want to return approved orders, so only where current = false
        current: false
      }, 
      attributes: ['id', 'StatusTypeId', 'OrderId'],
      // include shipping info from the Order table
      include:[{
        model: models.Order,
        attributes: ['shipping_address', 'shipping_city', 'shipping_state', 'shipping_zip', 'po_number']
      }]
    })
    .then(function(orders) {
      res.json({orders: orders});
    })
    .catch(function(err) {
      res.json({error: err});
    })

});

module.exports = router;
