'use strict';

const router = require('express').Router();
const models = require('../models');

// show all current orders
router.get('/current', function(req, res){
  console.log('current orders');
  models.Order
    .findAll({
      where: {
        status: 'quote'
      },
      include:[{
        model: models.Order_Detail,
        include:[{
          model: models.Part
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
router.post('/new-quote', function(req, res){
  console.log(req.body);
  // data sanitation steps
  // let orderData = {
  //
  // }
  // first create new order
  if (req.body.userId) {
    models.Order
      .create({
        po_number: req.body.poNumber,
        UserId: req.body.userId
      })
      .then(function(data){
        // return created order, use ID to make order_details records
        console.log(data.dataValues);
        let orderID = data.dataValues.id;
        // function for creating order_detail record
        const createDetail = function (detail) {
          return models.Order_Detail
            .create({
              machine_serial_num: detail.machine_serial_num,
              quantity: detail.quantity,
              part_number: detail.part_number,
              OrderId: orderID,
            })
            .then(function(order_detail){
              return order_detail.id;
            });
        };

        // array for storing create order_detail queries
        let detailArray = [];
        // loop through post request details
        req.body.details.forEach(function(detail){
          // push details into order_detail.create promise array
          detailArray.push(createDetail(detail));
        });

        // execute all promises from order_detail query array
        Promise.all(detailArray)
        .then(function(stuff){
          console.log(stuff);
          // after all promises are returned find order record
          models.Order
          .findAll({
            where: {
              id: orderID
            },
            include:[{
              model: models.Order_Detail
            }]
          })
          .then(function(lastOrder){
            console.log('this is the order we found');
            console.log(lastOrder[0].dataValues.Order_Details);
              res.json({orders: lastOrder});
          });
        }); // end of promise.all for order_detail.create
      }) // end of Order.Create
      .catch(function(err){
        res.json({error: err});
      });
  } else {
    res.json({error: 'not authorized'});
  }
});

module.exports = router;
