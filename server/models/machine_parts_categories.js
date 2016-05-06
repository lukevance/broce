"use strict";

module.exports = function(sequelize, DataTypes) {
    var Parts_Category = sequelize.define("Parts_Category", {
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
    },{
      classMethods: {
        associate: function(models){
          Parts_Category.hasMany(models.Part);
        }
      }
    }, {
       tableName: 'parts_categories'
    });

    return Parts_Category;
};
