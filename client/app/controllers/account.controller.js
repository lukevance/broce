function AccountController($window, $http, GetUsersQuotes, PostNewQuote, $scope, $route) {
    console.log('inside');
    var vm = this;
    vm.removepart = removePart;
    vm.addnewchoice = addNewChoice;
    vm.partSelect = [];
    vm.IsVisible = false;
    vm.reloadroute = reloadRoute;
    vm.showhide = ShowHide;
    vm.submit = submitNewQuote;
    vm.inputs = {};
    vm.mydata = [];
    GetUsersQuotes(usersOrdersCallback);

    function submitNewQuote() {
        var serialNumber = document.getElementById("frm").elements.namedItem("serialNumber").value;
        var partSelect = document.getElementById("frm").elements.namedItem("partSelect").value;
        var quantitySelect = document.getElementById("frm").elements.namedItem("quantitySelect").value;


        var quoteBody = {
            "poNumber": "12341",
            "userId": 3,
            "details": [{
                "machineSerialNum": serialNumber,
                "partID": partSelect,
                "quantity": quantitySelect
            }]
        }
        if (PostNewQuote(quoteBody, dealWithResponse)) {
            reloadRoute();
        } else {
            alert('Youre order has not been added, try again')
        }
        console.log(quoteBody);
    }
    //reloads route
    function reloadRoute() {
        $route.reload();
    }

    function dealWithResponse(response) {
        console.log(response);
    }

    $scope.parts = [{
        id: "choice1"
    }, {
        id: "choice2"
    }];

    function addNewChoice() {
        var newItemNo = $scope.parts.length + 1;
        $scope.parts.push({
            'id': 'choice' + newItemNo
        });
    }

    function removePart() {
        var lastItem = $scope.parts.length - 1;
        $scope.parts.splice(lastItem);
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

    function ShowHide() {
        //If DIV is visible it will be hidden and vice versa.
        console.log('before');
        $scope.IsVisible = $scope.IsVisible ? false : true;
        console.log('after');

    }

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
