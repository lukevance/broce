'use strict';

function AdminShipOrders () {
  return {
    restrict: 'E',
    scope: {
      quotes: '='
    },
    template: require('../../pages/partials/adminOrders.html'),
    controller: function(){
      console.log('heyyyyy ship orders directive!');
    }
  };
}

module.exports = AdminShipOrders;
