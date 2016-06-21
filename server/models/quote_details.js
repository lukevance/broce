"use strict";

module.exports = function(sequelize, DataTypes) {
  let Quote_Detail = sequelize.define("Quote_Detail", {
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models){
        Quote_Detail.belongsTo(models.Order_Detail);
        Quote_Detail.belongsTo(models.User);
      }
    }
  });
  return Quote_Detail;
};
