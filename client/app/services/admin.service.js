'use strict';

function GetAdminSummaryData ($http, EnvironmentService) {
  return function (nextFunc) {
    return $http.get(EnvironmentService.path + '/admin/summary')
    .then(function(summaryData){
      nextFunc(summaryData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function AdminGetQuotesService ($http, EnvironmentService) {
  return function (type, nextFunc) {
    return $http.get(EnvironmentService.path + '/quotes/' + type)
    .then(function(quotesData){
      nextFunc(quotesData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

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
  GetAdminSummaryData: GetAdminSummaryData,
  AdminQuotesService: AdminGetQuotesService,
  PutPriceForQuoteService: PutPriceForQuoteService
};
