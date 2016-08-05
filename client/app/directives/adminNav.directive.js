'use strict';

function AdminNav () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: require('../pages/partials/adminNav.html'),
    controller: function($scope) {
      console.log('admin navbar is visible?');
    }
  };
}

module.exports = AdminNav;
