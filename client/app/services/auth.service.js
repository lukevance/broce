'use strict';

// inject http service from angular
SignupService.$inject = ['$http'];
function SignupService ($http) {
  var message = 'you are trying to sign up!';
  return message;
}

function SigninService ($http) {
  return function (userCredentials, nextFunc) {
    return $http.post('//localhost:3000/auth/signin', userCredentials)
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

module.exports = {
  SignupService: SignupService,
  SigninService: SigninService
};
