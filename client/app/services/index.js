'use strict';

var angular = require('angular');

angular.module('partsApp')
  .service('SignupService', require('./auth.service'));
