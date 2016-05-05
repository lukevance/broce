"use strict";

module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define("Part", {
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cost: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
       tableName: 'parts'
    });

    return Part;
};
