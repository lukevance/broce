'use strict';

function adminAllOrders () {
  return function () {
    return {
      requestedQuotes: [
        {
          account: 'CAT DEALER',
          user: 'Dealer Dude',
          createdAt: new Date(),
          details: [
            {
              machine_serial_num: 1234512,
              parts: [
                {
                  number: 'R10798',
                  quantity: 3,
                  price: 2.99
                },
                {
                  number: 'AD0976',
                  quantity: 2
                }
              ]
            }, {
              machine_serial_num: 1234512,
              parts: [
                {
                  number: 'R10798',
                  quantity: 3,
                  price: 2.99
                },
                {
                  number: 'AD0976',
                  quantity: 2
                }
              ]
            }
          ]
        },
        {
          account: 'Sunstate REntals',
          user: 'Sunny Bro',
          createdAt: new Date(),
          details: [
            {
              machine_serial_num: 908741,
              parts: [
                {
                  number: 'HR-95134',
                  quantity: 1,
                },
                {
                  number: 'XJ5725',
                  quantity: 2
                }
              ]
            }
          ]
        }
      ],
      submittedQuotes: [
        {
          account: 'Some Other Dealer',
          user: 'Dwayne Johnson',
          createdAt: new Date(),
          details: [
            {
              machine_serial_num: 896543,
              parts: [
                {
                  number: 'R10798',
                  quantity: 3,
                  price: 21.73
                },
                {
                  number: 'AD0976',
                  quantity: 2,
                  price: 11.92
                }
              ]
            }
          ]
        },
      ],
      orders: [

      ],
      shippedOrders: [

      ]
    }; // END OF DUMMY DATA
  };
}

module.exports = adminAllOrders;
