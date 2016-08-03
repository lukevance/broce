'use strict';

function AdminQuotesController (AdminQuotesService) {
  console.log('quotes rule!!!');
  // function for distributing quotes data
  function getQuotesResponse(quotesData){
    console.log(quotesData.data);
  }

  AdminQuotesService(getQuotesResponse);

}

module.exports = AdminQuotesController;
