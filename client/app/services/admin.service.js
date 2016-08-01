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

module.exports = {
  GetAdminSummaryData: GetAdminSummaryData
};
