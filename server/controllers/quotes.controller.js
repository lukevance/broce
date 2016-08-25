'use strict';

const router = require('express').Router();
const models = require('../models');

// GET all current quotes
router.get('/', function(req, res){
  // check for admin authorization

  models.Order
  .findAll({
    include: [
      {
        model: models.Order_Status,
        where: {current: true},
        attributes: ["createdAt"],
        include: [
          {
            model: models.Status_Type,
            attributes: ["status"]
          }
        ],
      },
      {
        model: models.Order_Detail,
        attributes: ["machine_serial_num", "part_number", "quantity", "price"]
        // add shipping info model connection
      },
      {
        model: models.User,
        attributes: ["first_name", "last_name", "email"],
        include: [
          {
            model: models.Account,
            attributes: ["account_name"]
          }
        ]
      }
    ],
    limit: 20
  })
  .then(function(orders){
    // setup response object
    let summaryResponse = {
      requestedQuotes: [],
      submittedQuotes: [],
      orders: [],
      shippedOrders: []
    };

    // loop through orders to organize correctly
    orders.forEach(function(order){
      // create shorthand for status
      let orderStatus = order.Order_Statuses[0].Status_Type.status;
      // if order is a quote organize as quote
      if (orderStatus === "quote"){
            // further organization if needed in future
                // setup new details property for parts info
                // order.details = [];
                // loop through part details of quote
                // order.Order_Details.forEach(function(detail){
                //   // loop through new details property
                //   order.details.forEach(function(machine){
                //     // check for existing record of serial num
                //     if (machine.serial_num === detail.machine_serial_num){
                //       order.details.parts.push({
                //         number: detail.part_number,
                //         quantity: detail.quantity
                //       });
                //     }
                //     // if no existing record, make new
                //     else {
                //
                //     }
                //   })
                // });
        summaryResponse.requestedQuotes.push(order);
      } else if (orderStatus === "priced"){
        summaryResponse.submittedQuotes.push(order);
      } else if (orderStatus === "ordered"){
        summaryResponse.orders.push(order);
      } else if (orderStatus === "shipped"){
        summaryResponse.shippedOrders.push(order);
      }
    });

    res.json(summaryResponse);
  })
  .catch(function(err){
    res.json({error: err});
  });
});

// GET current quotes for specified user
router.get('/:userId', function(req, res){
  console.log(req.params);
  res.json({message: 'Unfinished route, sorry :/', reqParams: req.params});
});

// POST create new quote record
router.post('/', function(req, res){
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

// PUT - price a requested quote - ADMIN ONLY
router.put('/:id', function(req, res){
  // check for admin role first

  // check for id parameter
  if (req.params.id){
    // find order details
    // function for updating details
    models.Order_Detail
      .findAll({
        where: {
          OrderId: req.body.OrderId
        }
      })
      .then(function(details){
        res.json({orderDetails: details});
      })
      .catch(function(err){
        res.json({error: err});
      });
    // update each record with price

    // when prices are confirmed, update order_status
  } else {
    res.status(403).json({error: 'Resource expects id parameter'});
  }

});

module.exports = router;
