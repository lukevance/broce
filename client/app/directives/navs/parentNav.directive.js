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

      // function to check location and update
      function updateNav() {
        let location = $location.path().split('/');
        if (location[1] === 'user') {
          $scope.userRole = true;
          $scope.adminRole = false;
        } else if (location[1] === 'admin') {
          $scope.adminRole = true;
          $scope.userRole = false;
        }
      }

      updateNav();


      $scope.$watch('$routeUpdate', function(){
        console.log('route change!');
        $scope.sort = $location.search().sort;
        $scope.order = $location.search().order;
        $scope.offset = $location.search().offset;
        updateNav();
      });

    } // end of controller
  };
}

module.exports = ParentNav;
