'use strict';

function ParentNav () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: require('../../pages/partials/navs/parentNav.html'),
    controller: function($scope, $location) {
      $scope.userRole = false;
      $scope.adminRole = false;

      let location = $location.path().split('/');
      if (location[1] === 'user') {
        $scope.userRole = true;
      } else if (location[1] === 'admin') {
        $scope.adminRole = true;
      }

      $scope.$on('$routeUpdate', function(){
        $scope.sort = $location.search().sort;
        $scope.order = $location.search().order;
        $scope.offset = $location.search().offset;
      });

    } // end of controller
  };
}

module.exports = ParentNav;
