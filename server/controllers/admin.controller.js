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
