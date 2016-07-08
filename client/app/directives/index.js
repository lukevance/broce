'use strict';

var angular = require('angular');

angular.module('partsApp')
  // .directive('navbar', require('./navbar.directive'))
  .directive('adminOrders', require('./admin/adminOrders.directive'))
  .directive('adminQuotes', require('./admin/adminQuotes.directive'))
  .directive('adminSubQuotes', require('./admin/adminSubQuotes.directive'))
  .directive('adminShipOrders', require('./admin/adminShipOrders.directive'));
