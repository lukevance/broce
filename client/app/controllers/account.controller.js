function AccountController($scope) {
    console.log('inside');

    var dummydata =
    [{orderName: "350 part", groupName: "Caterpillar", quantity: 1, cost: 250}];

    $scope.dummydata = dummydata;
    var vm = this;
    vm.message = 'test';
    console.log('test');

}

//make a request to server to find all orders

//request for order
module.exports = AccountController;
