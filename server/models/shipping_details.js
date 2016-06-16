"use strict";

module.exports = function(sequelize, DataTypes) {
  let Shipping_Detail = sequelize.define("Shipping_Detail", {
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    classMethods: function(models){
      Shipping_Detail.belongsTo(models.Order_Detail);
      Shipping_Detail.belongsTo(models.models.User);
    }
  });
  return Shipping_Detail;
};
