function UserQuotesController (GetUsersQuotes) {
  var vm = this;
  vm.message = "this should display the user's priced quotes.";

  GetUsersQuotes(3, loadQuotes);

  function loadQuotes (quotes) {
    console.log(quotes);
    // set response data to variable on view model
    vm.usersQuotes = quotes.data.orders;
    // loop through var on view model to add functionality
    vm.usersQuotes.forEach(function(quote){
      // set switch var for show/hide details
      quote.showDetails = false;
      quote.detailsText = "Show";
      // set total price value for order
      quote.total = 0;
      // update total price by adding each part
      quote.Order.Order_Details.forEach(function(part){
        quote.total += (part.price * part.quantity);
      });
    });
  } // end of dealWithit

  // function for switching detail view for each quote
  vm.switchDetailView = switchDetailView;
  function switchDetailView (quote) {
    quote.showDetails = !quote.showDetails;
    if (quote.detailsText === 'Show') {
      quote.detailsText = 'Hide';
    } else if (quote.detailsText === 'Hide'){
      quote.detailsText = 'Show';
    }
  }
}

module.exports = UserQuotesController;
