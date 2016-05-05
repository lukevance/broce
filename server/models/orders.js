"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        poNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Order;
};
