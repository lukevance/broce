function UserQuotesController (GetUsersQuotes) {
  var vm = this;
  vm.message = "this should display the user's priced quotes.";

  GetUsersQuotes(3, dealWithit);

  function dealWithit (quotes) {
    console.log(quotes);
    vm.usersQuotes = quotes.data.orders;
    vm.usersQuotes.forEach(function(quote){
      quote.total = 0;
      quote.showDetails = false;
      quote.Order.Order_Details.forEach(function(part){
        quote.total += (part.price * part.quantity);
      });
    });
  }
}

module.exports = UserQuotesController;
