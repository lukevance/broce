function AccountController($scope, $route, $window, $http, GetUsersQuotes, PostNewQuote, CheckForAuthService) {
    var vm = this;
    vm.serialNumber = serialNumber;
    vm.addInput = addInput;
    // vm.IsVisible = false;
    vm.reloadroute = reloadRoute;
    vm.showhide = ShowHide;
    vm.submit = submitNewQuote;
    vm.inputs = {};
    // initial logic only allows dash view if signed in
    vm.auth = false;
    if (CheckForAuthService()) {
        vm.auth = true;
    }
    GetUsersQuotes(usersOrdersCallback);

    function submitNewQuote() {
      console.log("checked");

        var serialNumber = document.getElementById("frm").elements.namedItem("serialNumber").value;
        var partNumber = document.getElementById("frm").elements.namedItem("partNumber").value;
        var quantity = document.getElementById("frm").elements.namedItem("quantity").value;
        console.log(partNumber);
        console.log('CHECKING');
        // serialNumber = vm.input.serialNumber;

        inputs = {serialNumber, partNumber, quantity};
        console.log(inputs);
        //
        // var quoteBody = [
        //   {
        //     "machineSerialNum": serialNumber,
        //     "parts": [
        //       {
        //         "number": partNumber,
        //         "quantity": quantity
        //       }
        //       }
        //     ]
        // ];

        // var quoteBody = [{//this format gives Not authorized error
        //   "machine_serial_num": serialNumber,
        //     "Part": {
        //         "number": partNumber,
        //         "quantity": quantity
        //     }
        // }];

        var quoteBody = { //this format POSTS quote body but shows up empty in user object array...
            "poNumber": "12341",
            "userId": 3,
            "Details": [{
                "machine_serial_num": serialNumber,
                "partId": partNumber,
                "quantity": quantity
            }]
        }


        if (PostNewQuote(quoteBody, dealWithResponse)) {
            reloadRoute();
        } else {
            alert('Youre order has not been added, try again')
        }
        console.log("quoteBody");

        console.log(quoteBody);

    };
    var counter = 1;
    var limit = 5;
function addInput(divP,divQ){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div'+counter);
          var newdivQ = document.createElement('div'+counter);
          newdiv.innerHTML = "Part"+ (counter + 1) +"<br><input class='form-control' id='div"+counter+"' type='text' name='partNumber[]'>";
          newdivQ.innerHTML = "QTY <input class='form-control' id='divQ"+counter+"' type='text' name='myInputsQ[]'>"
          document.getElementById(divP).appendChild(newdiv);
          document.getElementById(divQ).appendChild(newdivQ);
          counter++;
     }
}



    //reloads route
    function reloadRoute() {
        $route.reload();
    }

    function dealWithResponse(response) {
        console.log(response);
    }





    function usersOrdersCallback(orderData) {
        // check to be sure orders arrived
        var data = orderData.data;
        vm.mydata = data.curOrders;
        // console.log(vm.mydata);
        // this callback will be called asynchronously
        // when the response is available
        // response = response.Curorders.Order_Details.Machine_serial_num
        var machineSerialNum = data.curOrders[0].Order_Details[0].machine_serial_num;
        // dataArray = [{serialNumber:machineSerialNum}]
        // console.log(data.curOrders[0].Order_Details[0].machine_serial_num);
        console.log(data.curOrders); //.object.Order_Details.object.Machine_serial_num
    }

    function ShowHide() {
        //If DIV is visible it will be hidden and vice versa.
        // console.log('before');
        $scope.IsVisible = $scope.IsVisible ? false : true;
        // console.log($scope.IsVisible);
        // console.log('after');

    }
// function addFields(){
//   if(addFields()){
//     inputs =
//   }
// }





    //     function pages($scope, $filter) {
    //     $scope.currentPage = 0;
    //     $scope.pageSize = 10;
    //     $scope.data = [];
    //     $scope.q = '';
    //
    //     function getData {
    //       // needed for the pagination calc
    //       // https://docs.angularjs.org/api/ng/filter/filter
    //       return $filter('filter')($scope.data, $scope.q)
    //      /*
    //        // manual filter
    //        // if u used this, remove the filter from html, remove above line and replace data with getData()
    //
    //         var arr = [];
    //         if($scope.q == '') {
    //             arr = $scope.data;
    //         } else {
    //             for(var ea in $scope.data) {
    //                 if($scope.data[ea].indexOf($scope.q) > -1) {
    //                     arr.push( $scope.data[ea] );
    //                 }
    //             }
    //         }
    //         return arr;
    //        */
    //     }
    //
    //     $scope.numberOfPages=function(){
    //         return Math.ceil($scope.getData().length/$scope.pageSize);
    //     }
    //
    //     for (var i=0; i<65; i++) {
    //         $scope.data.push("Item "+i);
    //     }
    // }]);
    //
    // //We already have a limitTo filter built-in to angular,
    // //let's make a startFrom filter
    // app.filter('startFrom', function() {
    //     return function(input, start) {
    //         start = +start; //parse to int
    //         return input.slice(start);
    //     }
    // });







}
//make a request to server to find all orders

//request for order
module.exports = AccountController;
