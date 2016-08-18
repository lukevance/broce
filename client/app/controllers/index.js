'use strict';

var angular = require('angular');

angular.module('partsApp')
  .controller('AuthController', ["$window","SigninService","SignupService", require('./auth.controller')])
  .controller('AboutController', require('./about.controller'))

  .controller('AccountController',["$scope", "$route", "$window", "$http", "GetUsersQuotes","PostNewQuote", "CheckForAuthService", require('./account.controller')])
  .controller('FormController',require('./form.controller'))
  .controller('ContactController', require('./contact.controller'))

  // user controllers
  .controller('UserDashController', ["$location" ,require('./user/userDash.controller')])
  .controller('QuoteRequestController', ["NewQuoteService",require('./user/quoteRequest.controller')])


  // admin controllers
  .controller('AdminController', ["$scope", "AdminSummaryService", "DummyDataService", require('./admin.controller')])
  .controller('AdminQuotesController', ["AdminQuotesService", require('./admin/quotes.controller')])


  // error handling controllers
  .controller('ErrorController', require('./error.controller'));
