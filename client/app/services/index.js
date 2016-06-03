'use strict';

var angular = require('angular');

angular.module('partsApp')
  .service('SignupService', ['$http', require('./auth.service')]);
