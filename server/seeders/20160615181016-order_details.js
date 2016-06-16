'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Order_Details', [
      {
        machine_serial_num: 407638,
        quantity: 2,
        OrderId: 1,
        PartId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machine_serial_num: 305322,
        quantity: 1,
        OrderId: 1,
        PartId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Order_Details', null, {});
  }
};
