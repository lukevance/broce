'use strict';

// inject http service from angular
SignupService.$inject = ['$http'];
SigninService.$inject = ['$http'];
CheckForAuth.$inject = ['$window'];



function SigninService ($http, EnvironmentService) {
  return function (userCredentials, nextFunc) {
    return $http.post(EnvironmentService.path + '/auth/signin', userCredentials)
    .then(function(authorizedUserData){
      console.log(authorizedUserData);
      nextFunc(authorizedUserData);
    })
    .catch(function(err){
      console.log(err);
      // if necessary delete window storage of token
    });
  };
}

function SignupService ($http, EnvironmentService) {
  return function (userCredentials, nextFunc) {
    return $http.post(EnvironmentService.path + '/auth/signup', userCredentials)
    .then(function(authorizedUserData){
      console.log(authorizedUserData);
      nextFunc(authorizedUserData);
    })
    .catch(function(err){
      console.log(err);
      // if necessary delete window storage of token
    });
  };
}

function CheckForAuth ($window) {
  return function () {
    console.log('checking for auth...');
    if ($window.localStorage.token) {
      console.log(window.atob($window.localStorage.token.split(".")[1]));
      return true;
    } else {
      console.log("no token");
      return false;
    }
  };
}

module.exports = {
  SignupService: SignupService,
  SigninService: SigninService,
  CheckForAuthService: CheckForAuth
};
