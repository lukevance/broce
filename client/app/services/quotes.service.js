'use strict';

function PutPriceForQuote ($http, EnvironmentService) {
  return function (quoteId, nextFunc) {
    return $http.put(EnvironmentService.path + '/quotes/' + quoteId)
      .then(function(updatedQuotes){
        nextFunc(updatedQuotes);
      })
      .catch(function(error){
        console.log(error);
      });
  };
}

module.exports = {
  PutPriceForQuote: PutPriceForQuote
};
