'use strict';

function PutPriceForQuoteService ($http, EnvironmentService) {
  return function (quoteBody, quoteId, nextFunc) {
    return $http.put(EnvironmentService.path + '/quotes/' + quoteId, quoteBody)
      .then(function(updatedQuotes){
        nextFunc(updatedQuotes);
      })
      .catch(function(error){
        console.log(error);
      });
  };
}

module.exports = {
  PutPriceForQuoteService: PutPriceForQuoteService
};
