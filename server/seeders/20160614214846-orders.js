'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      {
        shipping_address: null,
        shipping_city: null,
        shipping_state: null,
        po_number: null,
        status: 'quote',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
