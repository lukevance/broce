"use strict";

module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        account_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        billing_address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
      classMethods: {
        associate: function (models) {
          Account.hasMany(models.User);
        }
      }
    });

    return Account;
};
