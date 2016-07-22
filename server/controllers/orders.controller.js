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
        UserId: req.body.userId,
        status: 'quote'
      })
      .then(function(data){
        console.log(data.dataValues);
        let orderID = data.dataValues.id;
        req.body.details.forEach(function(val){
          models.Order_Detail
            .create({
              machine_serial_num: val.machineSerialNum,
              quantity: val.quantity,
              PartId: val.partID,
              OrderId: orderID,
            });
        });
        console.log(orderID);
        models.Order
        .findAll({
          where: {
            id: orderID
          },
          include:[{
            model: models.Order_Detail,
            include:[{
              model: models.Part
            }]
          }]
        })
        .then(function(lastOrder){
          console.log('this is the order we found');
          console.log(lastOrder[0].dataValues.Order_Details);
            res.json({orders: lastOrder});
        });
      })
      .catch(function(err){
        res.json({error: err});
      });
  } else {
    res.json({error: 'not authorized'});
  }
});

module.exports = router;
