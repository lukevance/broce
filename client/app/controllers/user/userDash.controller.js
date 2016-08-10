function UserDashController () {
  var vm = this;
  // controlls what is visible based on auth token presence
  vm.auth = true;

  // controls which form is visible
  vm.quoteForm = false;
  vm.orderForm = false;

  // back to main dash
  vm.seeMainDash = seeMainDash;
  function seeMainDash () {
    vm.quoteForm = false;
    vm.orderForm = false;
  }

  // shows quote form
  vm.showQuoteForm = showQuoteForm;
  function showQuoteForm () {
    vm.quoteForm = true;
    vm.orderForm = false;
  }

  // shows order form
  vm.showOrderForm = showOrderForm;
  function showOrderForm () {
    vm.quoteForm = false;
    vm.orderForm = true;
  }




}

module.exports = UserDashController;
