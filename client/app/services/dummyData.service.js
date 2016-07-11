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
          ],
          comments: [
            {
              user: 'Ray Bray',
              date: new Date(),
              text: 'Hey there bryan I changed your first part number to the appropriate number for your model. Let me know if you have any questions.'
            }

          ]
        },
      ],
      orders: [
        {
          account: 'The Real DEALer',
          user: 'Kevin Love',
          createdAt: new Date(),
          details: [
            {
              machine_serial_num: 304576,
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
            },
          ],
          total: 89.03,
          comments: [
            {
              user: 'Ray Bray',
              date: new Date(),
              text: 'Hey there bryan I changed your first part number to the appropriate number for your model. Let me know if you have any questions.'
            },
            {
              user: 'Bryan Buyer',
              date: new Date(),
              text: 'Sounds Good Ray, thanks again you guys are the best.'
            }
          ]
        }
      ],
      shippedOrders: [
        {
          account: 'Done Dealer',
          user: 'Tracy McGrady',
          createdAt: new Date(),
          details: [
            {
              machine_serial_num: 5672344,
              parts: [
                {
                  number: 'XJ0971',
                  quantity: 1,
                  price: 71.73
                },
                {
                  number: '307188',
                  quantity: 6,
                  price: 6.92
                }
              ]
            },
          ],
          total: 113.25,
          shippingDetails: {
            service: 'FedEx 2Day',
            cost: 26.73,
            trackingNum: 'alk1687ak2j3b1k29',
            date: new Date()
          },
          comments: [
            {
              user: 'Ray Bray',
              date: new Date(),
              text: 'Tracy, we will get this out to you as soon as possible.'
            },
            {
              user: 'Tracy McGrady',
              date: new Date(),
              text: 'Thanks Ray, Can you include the frieght info please?'
            }
          ]
        }

      ]
    }; // END OF DUMMY DATA
  };
}

module.exports = adminAllOrders;
