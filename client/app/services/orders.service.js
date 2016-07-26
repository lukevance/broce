'use strict';

GetUsersQuotes.$inject = ['$http'];
PostNewQuote.$inject=['$http'];

function GetUsersQuotes ($http, EnvironmentService) {
  return function (nextFunc) {
    return $http.get(EnvironmentService.path + '/orders/current')
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
    return $http.post(EnvironmentService.path + '/orders/new-quote', quoteBody)
      .then(function(newQuote){
        nextFunc(newQuote);
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
