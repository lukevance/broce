"use strict";

module.exports = function(sequelize, DataTypes) {
  let Status_Type = sequelize.define("Status_Type", {
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // connect to order_status
        Status_Type.hasMany(models.Order_Status);
      }
    }
  }, {
    tableName: 'status_types'
  });
  return Status_Type;
};
