'use strict';

const router = require('express').Router();
const models = require('../models');

// POST (admin only) new shipping confirmation info
router.post('/', function(req, res){
  // check for admin authorization

    // all the hard stuff

  res.json({message: 'Unfinished route, post new shipping confirmation info'});
});


module.exports = router;
