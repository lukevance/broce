'use strict';

const router = require('express').Router();
const models = require('../models');


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
            attributes: ["machine_serial_num", "part_number", "quantity", "price", "id"]
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
