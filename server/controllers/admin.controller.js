'use strict';

const router = require('express').Router();
const models = require('../models');

// main dash call for dash summary
router.get('/summary', function(req, res){
  // setup response object
  let summaryResponse = {
    requestedQuotes: {},
    submittedQuotes: {},
    orders: {},
    shippedOrders: {}
  };


});
