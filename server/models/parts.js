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
          type: DataTypes.FLOAT,
          allowNull: true
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
       tableName: 'parts'
    },
    {
      classMethods: {
        associate: function(models){
           Part.belongsTo(models.Parts_Category);
        }
      }
    });

    return Part;
};
