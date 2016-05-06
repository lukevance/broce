"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order_Parts_Detail = sequelize.define("Order_Parts_Detail", {
        machineSerialNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
      classMethods: {
        associate: function(models) {
          Order_Parts_Detail.belongsTo(models.Order);
          Order_Parts_Detail.belongsTo(models.Part);
        }
      }
    }, {
       tableName: 'order_parts_details'
    });

    return Order_Parts_Detail;
};
