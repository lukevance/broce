function UserQuotesController (GetUsersQuotes) {
  var vm = this;

  GetUsersQuotes(3, loadQuotes);

  function loadQuotes (quotes) {
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

  // function for opening shipping form
  vm.showShipping = showShipping;
  function showShipping (quote) {
    clearShipping();
    vm.shippingIsVisible = true;
    vm.quoteToOrder = quote;
    console.log(vm.quoteToOrder);
  }

  // function to clear and hide shipping form
  vm.clearShipping = clearShipping;
  function clearShipping () {
    vm.shippingIsVisible = false;
    delete vm.quoteToOrder;
    vm.quoteToOrder = {};
  }
}


module.exports = UserQuotesController;
