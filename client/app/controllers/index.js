'use strict';

var angular = require('angular');

angular.module('partsApp')
  .controller('AuthController', ["$window","SigninService","SignupService", require('./auth.controller')])
  .controller('AboutController', require('./about.controller'))
  .controller('AccountController',require('./account.controller'))
  .controller('ContactController', require('./contact.controller'));
