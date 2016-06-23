'use strict';

var angular = require('angular');

angular.module('partsApp')
  .service('SigninService', ['$http', require('./auth.service').SigninService])
  .service('SignupService',['$http', require('./auth.service').SignupService])
  .service('CheckForAuthService', ['$window', require('./auth.service').CheckForAuthService])
  .service('PostNewQuote', ['$http', require('./orders.service').PostNewQuote])
  .service('GetUsersQuotes', ['$http', require('./orders.service').GetUsersQuotes]);
