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
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Order_Details', null, {});
  }
};
