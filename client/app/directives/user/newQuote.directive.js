'use strict';

function newQuoteForm () {
  return {
    restrict: 'E',
    template: require('../../pages/partials/user/newQuoteForm.html'),
    controller: function ($scope) {

    } // end of controller
  };
}

module.exports = newQuoteForm;
