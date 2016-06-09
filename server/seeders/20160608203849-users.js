'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'Dave',
        last_name: 'DealerDude',
        email: 'dave@dealerdude.com',
        password: '$2a$08$Ogqyva.KTiLwLB6cH5xhHuoDGQ7Cjr/lIIJ9xzXQf8b8nKnU7rkxa', //dudestuff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Bob',
        last_name: 'Taylor',
        email: 'bob@thetaylors.com',
        password: '$2a$08$ZCVow3DEz31KUajcTY26fOEYecQ2j7rqdzOsEDU5arWNDy4RGKcCS', //pants
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
