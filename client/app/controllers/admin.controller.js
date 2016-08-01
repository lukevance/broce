'use strict';

function AdminController ($scope, AdminSummaryService, DummyDataService) {
  var vm = this;
  // vm.ordersData = DummyDataService();

  $scope.ordersData = AdminSummaryService(logStuff);

  function logStuff (summaryData) {
    // console.log(summaryData.data);
  }

  // functions for showing and hiding admin modules
  vm.adminModuleStatuses = {
    quotes: {
      'admin-mod-default': true,
      'admin-mod-inactive': false,
      'admin-mod-active': false
    },
    subQuotes: {
      'admin-mod-default': true,
      'admin-mod-inactive': false,
      'admin-mod-active': false
    },
    orders: {
      'admin-mod-default': true,
      'admin-mod-inactive': false,
      'admin-mod-active': false
    },
    shipOrders: {
      'admin-mod-default': true,
      'admin-mod-inactive': false,
      'admin-mod-active': false
    }
  };

  // function to activate chosen module
  vm.moduleActive = moduleActive;
  function moduleActive (module) {
    // loop through modules on admin obj
    for (var mod in vm.adminModuleStatuses) {
      // exclude module that is chosen
      if (mod !== module) {
        // loop through classes and set only inactive to true
        statusSetter(vm.adminModuleStatuses, mod, 'admin-mod-inactive');
      }
      // set chosen module to active
      else {
        statusSetter(vm.adminModuleStatuses, mod, 'admin-mod-active');
      }
    }
    // define function to set status for entire module
    function statusSetter (ref, module, status){
      var classes = Object.keys(ref[module]);
      console.log(classes);
      for (var i = 0; i < classes.length; i++){
          if (classes[i] !== status){
            ref[module][classes[i]] = false;
          } else {
            ref[module][classes[i]] = true;
          }
      }
    }
  } //end of moduleActive function

  vm.defaultView = defaultView;
  function defaultView () {
    // loop through modules on admin obj
    for (var mod in vm.adminModuleStatuses) {
      if (vm.adminModuleStatuses[mod]){
        var classes = Object.keys(vm.adminModuleStatuses[mod]);
        for (var i = 0; i < classes.length; i++){
          if (classes[i] === 'admin-mod-default'){
            vm.adminModuleStatuses[mod][classes[i]] = true;
          } else {
            vm.adminModuleStatuses[mod][classes[i]] = false;
          }
        }
      }
    }
  } // end of defaultView function


}

module.exports = AdminController;
