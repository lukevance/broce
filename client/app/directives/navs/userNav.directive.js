'use strict';

function UserNav () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: require('../../pages/partials/navs/userNav.html'),
    controller: function($scope) {
    }
  };
}

module.exports = UserNav;
