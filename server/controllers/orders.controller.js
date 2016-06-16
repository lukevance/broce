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

// let sampleOrder = {
//   poNumber: 'po98234',
//   shippingAddress: '123 main street',
//   status: 'active',
//   details: [
//     {
//       machineSerialNum: 12335234,
//       parts: [
//         {
//           id: 34,
//           qty: 2
//         },
//         {
//           id: 72,
//           qty: 5
//         }
//       ]
//     },
//     {
//       machineSerialNum: 986234,
//       parts: [
//         {
//           id: 12,
//           qty: 1
//         }
//       ]
//     }
//   ]
// };



// create new order
router.post('/new-quote', function(req, res){
  // data sanitation steps
  // let orderData = {
  //
  // }
  // first create new order
  models.Order
    .create({
      po_number: req.body.poNumber,
      UserId: req.body.userId,
      status: 'quote'
    })
    .then(function(data){
      console.log(data);
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
      models.Order
      .findAll({
        where: {
          id: orderID
        },
        include: [{
          model: models.Order_Detail
        }]
      })
      .then(function(lastOrder){
          res.json({orders: lastOrder});
      });
    })
    .catch(function(err){
      res.json({error: err});
    });
});

module.exports = router;
