'use strict';

function AdminOrders () {
  return {
    restrict: 'E',
    scope: {
      quotes: '='
    },
    template: require('../../pages/partials/adminOrders.html'),
    controller: function(){
      console.log('heyyyyy orders directive!');
    }
  };
}

module.exports = AdminOrders;
