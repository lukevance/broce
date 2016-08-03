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


// post route for submitting prices of quotes
router.post('/pricedQuotes', function(req, res){
  let updatedDetails = [];
  // loop through details to update
  req.body.quoteDetails.forEach(function(detail){
    console.log(detail);
    models.Order_Detail
    .update({
      price: detail.price
    }, {
      where: {id: detail.id}
    })
    .then(function(orderDetails){
      updatedDetails.push(orderDetails);
    })
    .catch(function(err){
      res.json({error: err});
    });
  }); // all updates are done --NEED PROMISE HERE

  // send updated quotes to customers through email

  // send updated quotes back to client to update admin's view
  res.json({updatedQuotes: updatedDetails});
});

// post route for submitting shipped orders info
router.post('/shippedOrders', function(req, res){
  console.log(req.body);

  // instantiate object to contain shipping info
  let orders = {};
  // loop through details of submitted order

    // add shippedDetails record for each

    // add details to object

  // send shipping info to custoemr through email

  // send updated order record back to client to update view
  res.json({result: orders});
});

// get all current requestedQuotes
router.get('/requestedQuotes', function(req, res){
  models.Order_Status
  .findAll({
    where: {
      current: true,
      StatusTypeId: 1
    },
    attributes: ["OrderId", "createdAt", "StatusTypeId"],
    include: [
      {
        model: models.Order,
        include: [
          {
            model: models.User,
            attributes: ["first_name", "last_name", "email"],
            include: [
              {
                model: models.Account,
                attributes: ["account_name"]
              }
            ]
          },
          {
            model: models.Order_Detail,
            attributes: ["machine_serial_num", "part_number", "quantity", "price"]
          }
        ]
      }
    ],
    limit: 20
  })
  .then(function(quotesList){
    // Standardize Quotes --- NOT WORKING YET ---
    // let modQuotesList = [];
    // for (let i = 0; i < quotesList.length; i++){
    //   let newQuote = {};
    //   newQuote.user = {
    //     first_name: quotesList[i].Order.User.first_name,
    //     last_name: quotesList[i].Order.User.last_name
    //   };
    //   modQuotesList.push(newQuote);
    // }
    res.json({requestedQuotes: quotesList});
  })
  .catch(function(err){
    res.json({error: err});
  });
});


// utility functions
function copy(object) {
  var new_object = {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      new_object[key] = object[key];
    }
  }
  return new_object;
}

module.exports = router;
