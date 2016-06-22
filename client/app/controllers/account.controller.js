function AccountController($window, $http, GetUsersQuotes, PostNewQuote) {
    console.log('inside');
    var vm = this;
    vm.submit = submitNewQuote;
    vm.inputs = {};
    vm.mydata = [];
    GetUsersQuotes(usersOrdersCallback);

    function submitNewQuote() {
      var serialNumber = document.getElementById("frm").elements.namedItem("serialNumber").value;
      var partSelect = document.getElementById("frm").elements.namedItem("partSelect").value;
      var quantitySelect = document.getElementById("frm").elements.namedItem("quantitySelect").value;

      inputs = {serialNumber, partSelect, quantitySelect};

        //when called find vm model form inputs
        //Put it in a object with right format
        //var quoteBody = {poNumber:}; //adding more entries into an array
        var quoteBody = {
            "poNumber": "12341",
            "userId": 3,
            "details": [{
                "machineSerialNum": serialNumber,
                "partID": partSelect,
                "quantity": quantitySelect
            }]
        }
        console.log(quoteBody);
        PostNewQuote(quoteBody, dealWithResponse);

    }

    function dealWithResponse(response){
      console.log(response);
    }

    function usersOrdersCallback(orderData) {
        // check to be sure orders arrived
        var data = orderData.data;
        vm.mydata = data.curOrders;
        console.log(vm.mydata);
        // this callback will be called asynchronously
        // when the response is available
        // response = response.Curorders.Order_Details.Machine_serial_num
        var machineSerialNum = data.curOrders[0].Order_Details[0].machine_serial_num;
        // dataArray = [{serialNumber:machineSerialNum}]
        console.log(data.curOrders[0].Order_Details[0].machine_serial_num);
        console.log(data.curOrders); //.object.Order_Details.object.Machine_serial_num
    }


}
//make a request to server to find all orders

//request for order
module.exports = AccountController;
