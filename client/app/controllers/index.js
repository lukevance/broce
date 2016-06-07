'use strict';

var angular = require('angular');

angular.module('partsApp')
  .controller('AuthController', ["SigninService","SignupService", require('./auth.controller')])
  .controller('AboutController', require('./about.controller'))
  .controller('ContactController', require('./contact.controller'));
