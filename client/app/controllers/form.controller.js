function FormController() {
        var serialNumber = document.getElementById('serialNumber').value;
        var part = document.getElementById('partSelect').value;
        var quantity = document.getElementById('quantitySelect').value;
        var req = {
            method: 'POST',
            url: 'localhost:3000/orders/new-quote',
            headers: {
                'Content-Type': undefined
            },
            data: {
                poNumber: "12341",
                userId: 3,
                details: [{
                    machineSerialNum: serialNumber,
                    partID: part,
                    quantity: quantity
                }]
            }
        }

    console.log(req);
    // var machineSerial = getElementById('serialNumber');
    // var partId = getElementById('partSelect');
    // var quantity = getElementById('quantitySelect');
    // var add = getElementById('addButton');

    // if(add == true){
    //   machineSerial.value
    // }

}



module.exports = FormController;
