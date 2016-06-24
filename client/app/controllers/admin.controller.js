'use strict';

function AdminController (DummyDataService) {
  var vm = this;
  vm.dummyData = DummyDataService();

}

module.exports = AdminController;
