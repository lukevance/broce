'use strict';

var angular = require('angular');

angular.module('partsApp')
  .controller('SignupController', require('./auth.controller').SignupController)
  .controller('SigninController', require('./auth.controller').SigninController)
  .controller('AboutController', require('./about.controller'))
  .controller('ContactController', require('./contact.controller'));
