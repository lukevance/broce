'use strict';

function AdminController () {
  var vm = this;
  vm.dummyData = {
    requestedQuotes: [
      {
        account: 'CAT DEALER',
        user: 'Dealer Dude',
        createdAt: new Date(),
        details: {
          machine_serial_num: 1234512,
          parts: [
            {
              number: 'R10798',
              quantity: 3
            },
            {
              number: 'AD0976',
              quantity: 2
            }
          ]
        }
      },
      {
        account: 'Sunstate REntals',
        user: 'Sunny Bro',
        createdAt: new Date(),
        details: {
          machine_serial_num: 908741,
          parts: [
            {
              number: 'HR-95134',
              quantity: 1
            },
            {
              number: 'XJ5725',
              quantity: 2
            }
          ]
        }
      }
    ],
    submittedQuotes: [

    ],
    orders: [

    ],
    shippedOrders: [

    ]
  }; // END OF DUMMY DATA

}

module.exports = AdminController;
