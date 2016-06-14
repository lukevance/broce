'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'Dave',
        last_name: 'DealerDude',
        email: 'dave@dealerdude.com',
        password: 'dudestuff',
        AccountId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Bob',
        last_name: 'Taylor',
        email: 'bob@thetaylors.com',
        password: 'pants',
        AccountId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
