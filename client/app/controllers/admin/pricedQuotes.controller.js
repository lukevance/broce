'use strict';

function PricedQuotesController (AdminQuotesService, PutPriceForQuoteService) {
  var vm = this;
  var moment = require('moment');
  // function for organizing quotes data
  function organizeQuotes(quotesData){
    console.log(quotesData);
    // setup variable to modify
    var quotesOrganized = quotesData.data.pricedQuotes;
    // loop through each quote
    quotesData.data.pricedQuotes.forEach(function(quote){
      // setup default values for quotes
      quote.total = "N/A";
      quote.showDetails = false;
      quote.showText = "Show";
      // check for PO_number
      if (!quote.Order.po_number){
        quote.Order.po_number = 'NA';
      }
      // add comment storage and view switch
      quote.showCommentBox = false;
      quote.comments = [];
      // add display switch for post pricing response
      quote.isVisible = true;
      // make createdAt value pretty
      quote.Order.requestedOn = moment(quote.Order.createdAt).format('h:mm a, MMM Do');
      quote.pricedOn = moment(quote.createdAt).format('h:mm a, MMM Do');
      // update total for quote
      updateTotal(quote);
    });
    // set new object with modified properties to model
    vm.pricedQuotes = quotesOrganized;
  }

  // function for quote details display switch
  vm.showDetails = showDetails;
  function showDetails (quote) {
    quote.showDetails = !quote.showDetails;
    if (quote.showDetails) {
      quote.showText = "Hide";
    } else {
      quote.showText = "Show";
    }
  }

  // function to part pricing editMode switch
  // vm.editModeChng = editModeChng;
  // function editModeChng (part) {
  //   part.editMode = !part.editMode;
  // }

  // function to save price to quote
  // vm.addPrice = addPrice;
  // function addPrice (quote, part, partPrice) {
  //   // update price in object
  //   part.price = partPrice;
  //   // hide input and show buttons
  //   editModeChng(part);
  // }

  // update quote total to user view
  vm.updateTotal = updateTotal;
  function updateTotal (quote) {
    // reset total
    quote.total = 0.00;
    // loop through all parts in quote
    quote.Order.Order_Details.forEach(function(part){
      // if part is priced add to total
      if (part.price) {
        quote.total += part.price * part.quantity;
        quote.total = +(quote.total.toFixed(2));
      }
    });
  }

  // function to display comment section
  vm.showComments = showComments;
  function showComments (quote) {
    quote.showCommentBox = !quote.showCommentBox;
  }

  // function to add comment to quote
  vm.addComment = addComment;
  function addComment (quote) {
    quote.comments.push({
      user: "Ray Bray - the current user",
      text: vm.activeComment
    });
    console.log(vm.activeComment);
    vm.activeComment = "";
  }

  // function to submit quote to customer
  // vm.submitQuote = submitQuote;
  // function submitQuote (quote) {
  //   var quoteInfo = {
  //     id: quote.OrderId,
  //     comments: quote.comments,
  //     quoteDetails: quote.Order.Order_Details
  //   };
  //   PutPriceForQuoteService(quoteInfo, quoteInfo.id, pricedQuoteResponse);
  // }

  // function for dealing with posted quote
  // function pricedQuoteResponse (updatedQuoteInfo){
  //   //
  //   console.log(updatedQuoteInfo);
  //   // loop through quotes to check for match
  //   vm.pricedQuotes.forEach(function(quote){
  //     if (quote.OrderId === updatedQuoteInfo.data.updatedQuote.OrderId) {
  //       quote.isVisible = false;
  //     }
  //   });
  // }

  // call service and pass organization function into service nextFunc param
  AdminQuotesService('priced', organizeQuotes);

} // end of controller


module.exports = PricedQuotesController;
