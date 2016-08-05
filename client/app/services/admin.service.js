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

function AdminQuotesService ($http, EnvironmentService) {
  return function (nextFunc) {
    return $http.get(EnvironmentService.path + '/admin/requestedQuotes')
    .then(function(quotesData){
      nextFunc(quotesData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

module.exports = {
  GetAdminSummaryData: GetAdminSummaryData,
  AdminQuotesService: AdminQuotesService
};
