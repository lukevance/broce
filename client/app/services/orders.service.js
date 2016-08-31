'use strict';

GetUsersQuotes.$inject = ['$http'];
PostNewQuote.$inject=['$http'];

function GetUsersQuotes ($http, EnvironmentService) {
  return function (userId, nextFunc) {
    return $http.get(EnvironmentService.path + '/quotes/user/' + userId)
      .then(function(usersOrders){
        nextFunc(usersOrders);
      })
      .catch(function(error){
        console.log(error);
      });
  };
}

function PostNewQuote($http, EnvironmentService){
  return function (quoteBody, nextFunc) {
    return $http.post(EnvironmentService.path + '/quotes', quoteBody)
      .then(function(newQuote){
        if (nextFunc){
          nextFunc(newQuote);
        } else {
          console.log(newQuote);
        }
      })
      .catch(function(error){
        console.log(error);
      });
  };
}



module.exports = {
  GetUsersQuotes:GetUsersQuotes,
  PostNewQuote:PostNewQuote
};
