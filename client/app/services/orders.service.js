'use strict';

GetUsersQuotes.$inject = ['$http'];
PostNewQuote.$inject=['$http'];

function GetUsersQuotes ($http) {
  return function (nextFunc) {
    return $http.get('//localhost:3000/orders/current')
      .then(function(usersOrders){
        nextFunc(usersOrders);
      })
      .catch(function(error){
        console.log(error);
      });
  };
}

function PostNewQuote($http){
  return function (quoteBody, nextFunc) {
    return $http.post('//localhost:3000/orders/new-quote', quoteBody)
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
