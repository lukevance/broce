function UserDashController ($location) {
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

  // change route function
  vm.go = go;
  function go (newPath) {
    console.log(newPath);
    $location.path(newPath);
  }

  // shows quote form
  // vm.showQuoteForm = showQuoteForm;
  // function showQuoteForm () {
  //   vm.quoteForm = true;
  //   vm.orderForm = false;
  // }

  // shows order form
  // vm.showOrderForm = showOrderForm;
  // function showOrderForm () {
  //   vm.quoteForm = false;
  //   vm.orderForm = true;
  // }




}

module.exports = UserDashController;
