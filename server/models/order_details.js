"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order_Detail = sequelize.define("Order_Detail", {
        machine_serial_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
      classMethods: {
        associate: function(models) {
          Order_Detail.belongsTo(models.Order);
          Order_Detail.belongsTo(models.Part);
          Order_Detail.hasOne(models.Quote_Detail);
        }
      }
    }, {
       tableName: 'order_details'
    });

    return Order_Detail;
};
