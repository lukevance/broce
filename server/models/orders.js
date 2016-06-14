"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        shipping_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        shipping_city: {
          type: DataTypes.STRING,
          allowNull: true
        },
        shipping_state: {
          type: DataTypes.STRING,
          allowNull: true
        },
        po_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
      classMethods: {
        associate: function (models) {
          Order.hasMany(models.Order_Detail);
          Order.belongsTo(models.User);
        }
      }
    }, {
       tableName: 'orders'
    });

    return Order;
};
