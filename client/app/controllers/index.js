'use strict';

var angular = require('angular');

angular.module('partsApp')
  .controller('AuthController', ["$window","SigninService","SignupService", require('./auth.controller')])
  .controller('AboutController', require('./about.controller'))
  .controller('AccountController',["$window", "$http", require('./account.controller')])
  .controller('FormController', ["$scope", "$http", require('./form.controller')])
  .controller('ContactController', require('./contact.controller'));
