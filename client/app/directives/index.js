'use strict';

var angular = require('angular');

angular.module('partsApp')
  // .directive('navbar', require('./navbar.directive'))

  // admin directives
  .directive('adminOrders', require('./admin/adminOrders.directive'))
  .directive('adminQuotes', require('./admin/adminQuotes.directive'))
  .directive('adminSubQuotes', require('./admin/adminSubQuotes.directive'))
  .directive('adminShipOrders', require('./admin/adminShipOrders.directive'))

  // user directives
  .directive('newQuoteForm', require('./user/newQuote.directive'))

  // nav directives
  .directive('adminRoleNav', require('./navs/adminNav.directive'))
  .directive('userRoleNav', require('./navs/userNav.directive'))
  .directive('parentRoleNav', ["$location", require('./navs/parentNav.directive')]);
