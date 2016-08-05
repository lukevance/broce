"use strict";

module.exports = function(sequelize, DataTypes) {
  let Shipping_Option = sequelize.define("Shipping_Option", {
    option: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    classMethods: function(models){
      Shipping_Option.hasMany(models.Order);
    }
  });
  return Shipping_Option;
};
