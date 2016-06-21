function AccountController($window, $http, GetUsersQuotes) {
    console.log('inside');
    var vm = this;
    vm.mydata=[];
    GetUsersQuotes(usersOrdersCallback);

    function usersOrdersCallback (orderData) {
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


    // var dummydata =
    // [{orderName: "350 part", groupName: "CAT", quantity: 1},
    // {orderName:"250 Part", groupName: "Broce", quantity: 10}];
    //
    // var vm = this;
    // vm.message = 'test';
    // console.log('test');









}



//make a request to server to find all orders

//request for order
module.exports = AccountController;
