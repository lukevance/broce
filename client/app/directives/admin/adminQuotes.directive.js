'use strict';

function AdminQuotes () {
  return {
    restrict: 'E',
    scope: {
      quotes: '='
    },
    template: require('../../pages/partials/adminQuotes.html'),
    controller: function($scope){
      // loop through quotes add edit status
      $scope.quotes.forEach(function(quote){
        if (quote.details){
          // attach show attribute
          quote.total = 0.00;
          quote.showDetails = false;
          quote.showText = "Show";
          quote.showCommentBox = false;
          quote.details.forEach(function(val){
            val.parts.forEach(function(cur){
              cur.editMode = false;
            });
          });
        }
      });

      // function to show order details
      $scope.showDetails = showDetails;
      function showDetails (quote) {
        quote.showDetails = !quote.showDetails;
        if (quote.showDetails) {
          quote.showText = "Hide";
        } else {
          quote.showText = "Show";
        }
      }

      // function to open editMode
      $scope.editModeChng = editModeChng;
      function editModeChng (part) {
        part.editMode = !part.editMode;
      }

      // function to save price to quote
      $scope.addPrice = addPrice;
      function addPrice (part, partPrice) {
        part.price = partPrice;
        editModeChng(part);
      }

      // update quote total
      $scope.updateTotal = updateTotal;
      function updateTotal (quote) {
        quote.total = 0.00;
        quote.details.forEach(function(machine){
          machine.parts.forEach(function(part){
            if (part.price) {
              quote.total += part.price * part.quantity;
            }
          });
        });
      }

      // function to display comment section
      $scope.showComments = showComments;
      function showComments (quote) {
        quote.showCommentBox = !quote.showCommentBox;
      }

      // function to submit quote to customer
      $scope.submitQuote = submitQuote;
      function submitQuote () {

      }

    } // end of controller
  };
}

module.exports = AdminQuotes;
