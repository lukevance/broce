'use strict';

function AdminSubQuotes () {
  return {
    restrict: 'E',
    scope: {
      quotes: '='
    },
    template: require('../../pages/partials/adminSubQuotes.html'),
    controller: function(){
      console.log('heyyyyy sub quotes directive!');
    }
  };
}

module.exports = AdminSubQuotes;
