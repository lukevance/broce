function UserDashController () {
  var vm = this;
  vm.message = 'the use dash!';
  // controlls what is visible based on auth token presence
  vm.auth = true;
  console.log(vm.message);
}

module.exports = UserDashController;
