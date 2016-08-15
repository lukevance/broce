function QuoteRequestController() {
  var vm = this;

  // storage obj for quote details
  vm.quoteSummary = {};

  // function to add part
  vm.addPart = addPart;
  function addPart (serialNum, partNum, partQty) {
    var partInfo = {
      machine_serial: serialNum,
      part_number: partNum,
      quantity: partQty
    };
    if (vm.quoteSummary[serialNum]){
      vm.quoteSummary[serialNum].push(partInfo);
    } else {
      vm.quoteSummary[serialNum] = [];
      vm.quoteSummary[serialNum].push(partInfo);
    }
    vm.partNum = '';
    vm.partQty = '';
    console.log(vm.quoteSummary);
  }

} // end of controller

module.exports = QuoteRequestController;
