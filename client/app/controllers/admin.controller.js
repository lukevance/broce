'use strict';

function AdminController (DummyDataService) {
  var vm = this;
  vm.ordersData = DummyDataService();

}

module.exports = AdminController;
