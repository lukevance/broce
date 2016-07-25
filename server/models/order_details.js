"use strict";

module.exports = function(sequelize, DataTypes) {
    var Order_Detail = sequelize.define("Order_Detail", {
        machine_serial_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        part_number: {
          type: DataTypes.STRING,
          allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: true
        }
    }, {
      classMethods: {
        associate: function(models) {
          Order_Detail.belongsTo(models.Order);
          // Order_Detail.belongsTo(models.Part);
          // Order_Detail.hasOne(models.Quote_Detail);
          Order_Detail.belongsTo(models.Shipping_Option, {constraints: false});
          Order_Detail.belongsTo(models.Shipping_Detail, {constraints: false});
        }
      }
    }, {
       tableName: 'order_details'
    });

    return Order_Detail;
};
