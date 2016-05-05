"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }, {
       tableName: 'users'
    });

    return User;
};
