'use strict';

function UserNav () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: require('../pages/partials/userNav.html'),
    controller: function($scope) {
      console.log('user navbar is visible?');
    }
  };
}

module.exports = UserNav;
