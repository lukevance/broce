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
          quote.details.forEach(function(val){
            val.parts.forEach(function(cur){
              cur.editMode = false;
            });
          });
        }
      });

      // function to open editMode
      $scope.editModeChng = editModeChng;
      function editModeChng (part) {
        part.editMode = !part.editMode;
      }
      $scope.addPrice = addPrice;

      function addPrice (part, partPrice) {
        part.price = partPrice;
        editModeChng(part);
      }

    } // end of controller
  };
}

module.exports = AdminQuotes;
