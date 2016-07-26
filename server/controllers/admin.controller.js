'use strict';

const router = require('express').Router();
const models = require('../models');

// main dash call for dash summary
router.get('/summary', function(req, res){
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
        model: models.Order_Detail
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

// router.get('/quotes', function(req, res){
//   models.Order
//   .findAll({
//     include: [{
//       model: models.Order_Status,
//       where: {current: true, StatusTypeId: 1}
//     }]
//   })
//   .then(function(result){
//     res.json(result);
//   })
//   .catch(function(err){
//     res.json({error: err});
//   });
// });

module.exports = router;
