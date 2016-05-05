"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order_Parts_Detail = sequelize.define("order_parts_detail", {
        machineSerialNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
       tableName: 'order_parts_details'
    });

    return Order_Parts_Detail;
};
