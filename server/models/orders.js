"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
      classMethods: {
        associate: function (models) {
          Order.hasMany(models.Order_Parts_Detail);
          Order.belongsTo(models.User);
        }
      }
    }, {
       tableName: 'orders'
    });

    return Order;
};
