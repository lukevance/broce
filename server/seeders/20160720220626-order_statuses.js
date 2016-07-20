'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Order_Statuses', [
      {
        current: true,
        StatusTypeId: 1,
        OrderId: 1
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Order_Statuses', null, {});
  }
};
