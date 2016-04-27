'use strict';

// inject htttp service from angular
SignupService.$inject = ['$http'];
function SignupService ($http) {
  var message = 'you are trying to sign up!';
  return message;
}

module.exports = SignupService;
