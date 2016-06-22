function FormController($scope, $http, req) {
    // var serialNumber = document.getElementById('serialNumber').value;
    // var part = document.getElementById('partSelect').value;
    // var quantity = document.getElementById('quantitySelect').value;
    //     $scope.user = {};
    //
    //     $scope.submitForm = function() {
    //     $http({
    //       method  : 'POST',
    //       url     : 'localhost:3000/orders/new-quote',
    //       data    : $scope.user, //forms user object
    //       headers : {'Content-Type': 'undefined'}
    //      })
    //       .success(function(data) {
    //         if (data.errors) {
    //           // Showing errors.
    //           $scope.errorNumber = data.errors.serialNumber;
    //           $scope.errorPartID = data.errors.partSelect;
    //           $scope.errorQuantity = data.errors.quantitySelect;
    //         } else {
    //           $scope.message = data.message;
    //         }
    //       });
    //     };
    // });

    // var config = {
    //             headers : {
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    // $http.post('localhost:3000/orders/new-quote', {
    //             poNumber: "12341",
    //             userId: 3,
    //             details: [{
    //                 machineSerialNum: $scope.machineSerial,
    //                 partID: $scope.partSelect,
    //                 quantity: $scope.quantitySelect
    //             }]
    //         }, config)
    //    .then(
    //        function(response){
    //          console.log(response);
    //          console.log(data);
    //          // success callback
    //        },
    //        function(response){
    //          // failure callback
    //        }
    //     );




    function submitForm() {
            req = {
            method: 'POST',
            url: 'localhost:3000/orders/new-quote',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                poNumber: "12341",
                userId: 3,
                details: [{
                    machineSerialNum: $scope.machineSerial,
                    partID: $scope.partSelect,
                    quantity: $scope.quantitySelect
                }]
            }


        }
        console.log(req);

    }
    // var machineSerial = getElementById('serialNumber');
    // var partId = getElementById('partSelect');
    // var quantity = getElementById('quantitySelect');
    // var add = getElementById('addButton');

    // if(add == true){
    //   machineSerial.value
    // }
    var vm = this;
    vm.submit = submitForm;


}



module.exports = FormController;
