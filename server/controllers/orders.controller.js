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
  // check for authorized user
  // if (!req.body.token) {
  //   res.json({error: 'not authorized'});
  // }
  // else
   if (req.body.userId) {
    models.Order
      .create({
        po_number: req.body.poNumber,
        UserId: req.body.userId
      })
      .then(function(data){
        // return created order, use ID to make order_details records
        let orderID = data.dataValues.id;

        // create new status record
        models.Order_Status
          .create({
            current: true,
            StatusTypeId: 1,
            OrderId: orderID
          })
          .then(function(status){
            console.log(status);

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
              // console.log(stuff);
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
                // send created order and details back to client
                res.json({orders: lastOrder});
              });

            }); // end of promise.all for order_detail.create
          })
          .catch(function(err){
            res.json({error: err});
          }); // end of Order_Status.create

      }) // end of Order.Create
      .catch(function(err){
        res.json({error: err});
      });
  } else {
    res.json({error: 'not authorized'});
  }
});

module.exports = router;
