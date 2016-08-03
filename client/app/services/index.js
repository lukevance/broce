'use strict';

var angular = require('angular');

angular.module('partsApp')
  .service('EnvironmentService', require('./environment.service.js'))
  .service('SigninService', ['$http', 'EnvironmentService', require('./auth.service').SigninService])
  .service('SignupService',['$http', 'EnvironmentService', require('./auth.service').SignupService])
  .service('CheckForAuthService', ['$window', require('./auth.service').CheckForAuthService])
  .service('PostNewQuote', ['$http', 'EnvironmentService', require('./orders.service').PostNewQuote])
  .service('GetUsersQuotes', ['$http', 'EnvironmentService', require('./orders.service').GetUsersQuotes])

  // admin services
  .service('AdminSummaryService', ['$http', 'EnvironmentService', require('./admin.service').GetAdminSummaryData])
  .service('AdminQuotesService', ['$http', 'EnvironmentService', require('./admin.service').AdminQuotesService])
  .service('DummyDataService', require('./dummyData.service'));
