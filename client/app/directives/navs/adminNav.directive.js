'use strict';

function AdminNav () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: require('../../pages/partials/navs/adminNav.html'),
    controller: function($scope) {
    }
  };
}

module.exports = AdminNav;
