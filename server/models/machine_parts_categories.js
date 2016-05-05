"use strict";

module.exports = function(sequelize, DataTypes) {
    var Parts_Category = sequelize.define("Parts_Categories", {
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serialMin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        serialMax: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
       tableName: 'Parts_Categories'
    });

    return Parts_Category;
};
