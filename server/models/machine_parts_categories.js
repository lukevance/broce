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
       tableName: 'parts_categories'
    });

    return Parts_Category;
};
