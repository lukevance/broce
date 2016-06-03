'use strict';

const router = require('express').Router();

const models = require('../models');

// show all current orders
router.get('/current', function(req, res){
  models.Order
    .findAll({
      where: {
        status: 'active'
      }
      // include:[{
      //   model: models.Order_Parts_Detail,
      //   as: 'machines',
      //   include:[{
      //     model: models.Part,
      //     as: 'parts'
      //   }]
      // }]
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
router.post('/new', function(req, res){
  // data sanitation steps
  // let orderData = {
  //
  // }
  models.Order
    .create({
      poNumber: req.body.poNumber,
      shippingAddress: req.body.shippingAddress,
      status: 'active',
      note: req.body.note
    })
    .then(function(data){
      console.log(data);
      let orderID = data.dataValues.id;
      req.body.details.forEach(function(val){
        models.Order_Parts_Detail
          .create({
            machineSerialNum: val.machineSerialNum,
            quantity: val.quantity,
            partID: val.partID
          });
      });
      models.Order
      .findAll({
        where: {
          id: orderID
        }
        // include parts info
      })
      .then(function(lastOrder){
          // let orderID =
          res.json({orders: lastOrder});
      });
    })
    .catch(function(err){
      res.json({error: err});
    });
});

module.exports = router;
