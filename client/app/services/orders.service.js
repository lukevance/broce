'use strict';

GetUsersQuotes.$inject = ['$http'];

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


module.exports = GetUsersQuotes;
