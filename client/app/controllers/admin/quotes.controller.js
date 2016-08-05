'use strict';

function AdminQuotesController (AdminQuotesService) {
  var vm = this;

  // function for organizing quotes data
  function organizeQuotes(quotesData){
    // setup variable to modify
    var quotesOrganized = quotesData.data.requestedQuotes;
    // loop through each quote
    quotesData.data.requestedQuotes.forEach(function(quote){
      // setup default values
      quote.total = "N/A";
      quote.showDetails = false;
      quote.showText = "Show";
      quote.showCommentBox = false;
      quote.comments = [];
      // setup storage array for standardized details array
      quote.details = [];
      quote.machines = [];
      // loop through detail per quote
      quote.Order.Order_Details.forEach(function(detail){
        if (!quote.details[detail.machine_serial_num]){
          quote.details[detail.machine_serial_num] = [];
          quote.details[detail.machine_serial_num].push({
            number: detail.part_number,
            quantity: detail.quantity,
            price: detail.price
          });
          quote.machines.push(detail.machine_serial_num);
        } else {
          quote.details[detail.machine_serial_num].push({
            part_number: detail.part_number,
            quantity: detail.quantity,
            price: detail.price
          });
        }
        console.log(detail);
      });
    });
    console.log(quotesOrganized);
    vm.requestedQuotes = quotesOrganized;
  }

  // function for showing quote details
  vm.showDetails = showDetails;
  function showDetails (quote) {
    quote.showDetails = !quote.showDetails;
    if (quote.showDetails) {
      quote.showText = "Hide";
    } else {
      quote.showText = "Show";
    }
  }

  // function to open editMode
  vm.editModeChng = editModeChng;
  function editModeChng (part) {
    part.editMode = !part.editMode;
  }

  // function to save price to quote
  vm.addPrice = addPrice;
  function addPrice (quote, part, partPrice) {
    // loop through main order Obj

    part.price = partPrice;
    editModeChng(part);
  }

  // update quote total
  vm.updateTotal = updateTotal;
  function updateTotal (quote) {
    quote.total = 0.00;
    Object.keys(quote.details).forEach(function(machine){
      if (machine){
        quote.details[machine].forEach(function(part){
          if (part.price) {
            quote.total += part.price * part.quantity;
          }
        });
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
  vm.submitQuote = submitQuote;
  function submitQuote (quote) {
    console.log(quote);
  }

  // call service and pass organization function into service nextFunc param
  AdminQuotesService(organizeQuotes);

} // end of controller


module.exports = AdminQuotesController;
