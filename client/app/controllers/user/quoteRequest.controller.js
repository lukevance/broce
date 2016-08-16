function QuoteRequestController() {
  var vm = this;

  // storage obj for quote details
  vm.quoteInfo = {};
  // track total amount of parts in quote
  vm.quoteTotal = 0;

  // function to add part to quote
  vm.addPart = addPart;
  function addPart (serialNum, partNum, partQty) {
    // create storage obj for part
    var partInfo = {
      machine_serial_num: serialNum,
      part_number: partNum,
      quantity: partQty
    };
    // check quote info for existing machine_serial_num
    if (vm.quoteInfo[serialNum]){
      vm.quoteInfo[serialNum].push(partInfo);
    } else {
      vm.quoteInfo[serialNum] = [];
      vm.quoteInfo[serialNum].push(partInfo);
    }
    // update array of machine
    vm.quoteSummary = Object.keys(vm.quoteInfo);
    vm.quoteTotal += partQty;
    // clear form for new part info
    vm.partNum = '';
    vm.partQty = '';
  }

  // function to request quote
  vm.requestQuote = requestQuote;
  function requestQuote () {
    // setup obj to send
    var quoteBody = {
      poNumber: vm.poNumber,
      details: []
    };
    for (var machine in vm.quoteInfo){
      if (vm.quoteInfo[machine]){
        for (var i = 0; i < vm.quoteInfo[machine].length; i++){
          quoteBody.details.push(vm.quoteInfo[machine][i]);
        }
      }
    }
    console.log(quoteBody);
  }

} // end of controller

module.exports = QuoteRequestController;
