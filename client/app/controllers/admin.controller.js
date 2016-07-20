'use strict';

function AdminController (DummyDataService) {
  var vm = this;
  vm.ordersData = DummyDataService();

  // functions for showing and hiding admin modules
  vm.adminModules = {
    quotes: {
      'admin-mod-default': true,
      'admin-mod-inactive': false,
      'admin-mod-active': false
    },
    subQuotes: 'admin-mod-default',
    orders: 'admin-mod-default',
    shipOrders: 'admin-mod-default'
  };

  vm.inactive = {
    'admin-mod-inactive': true
  };

  vm.moduleActive = moduleActive;
  function moduleActive (module) {
    console.log(module);
    for (var mod in vm.adminModules) {
      if (mod !== module) {
        // use object keys !!!!!
        Object.keys(vm.adminModules.mod).forEach(function(status){
          if (status !== 'admin-mod-active'){
            vm.adminModules.mod.status = false;
          }
        });
        // for (var status in vm.adminModules.mod) {
        //   if (vm.adminModules.mod)
        // }
        // vm.adminModules.mod = 'admin-mod-inactive';
        // console.log(vm.adminModules.mod);
      }
    }
  }
}

module.exports = AdminController;
