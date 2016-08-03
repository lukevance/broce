'use strict';

var angular = require('angular');

angular.module('partsApp')
  .controller('AuthController', ["$window","SigninService","SignupService", require('./auth.controller')])
  .controller('AboutController', require('./about.controller'))
  .controller('AccountController',["$window", "$http", "GetUsersQuotes","PostNewQuote", "CheckForAuthService", require('./account.controller')])
  .controller('FormController',require('./form.controller'))
  .controller('ContactController', require('./contact.controller'))

  // admin controllers
  .controller('AdminController', ["$scope", "AdminSummaryService", "DummyDataService", require('./admin.controller')])
  .controller('AdminQuotesController', [require('./admin/quotes.controller')])


  // error handling controllers
  .controller('ErrorController', require('./error.controller'));
