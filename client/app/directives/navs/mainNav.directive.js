'use strict';

function mainNav () {
  return {
    restrict: 'E',
    template: require('../../pages/partials/navs/mainNav.html'),
    controller: function($scope, $window, $location) {
      if ($window.localStorage.token) {
        $scope.auth = true;
        $scope.userProfile = JSON.parse(window.atob($window.localStorage.token.split(".")[1]));
        console.log($scope.userProfile);
      } else {
        console.log('not signed in');
      }

      $scope.signout = signout;
      function signout () {
        delete $window.localStorage.token;
        $location.path('/');
        $window.location.reload();
      }
    }
  };
}

module.exports = mainNav;
