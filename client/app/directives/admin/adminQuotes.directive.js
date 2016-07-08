'use strict';

function AdminQuotes () {
  return {
    restrict: 'E',
    scope: {
      quotes: '='
    },
    template: require('../../pages/partials/adminQuotes.html'),
    controller: function(){
      console.log('heyyyyy directive!');
    }
  };
}

module.exports = AdminQuotes;
