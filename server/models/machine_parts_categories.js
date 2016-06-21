"use strict";

module.exports = function(sequelize, DataTypes) {
    var Parts_Category = sequelize.define("Parts_Category", {
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serial_min: {
            type: DataTypes.STRING,
            allowNull: true
        },
        serial_max: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
      classMethods: {
        associate: function(models){
          Parts_Category.belongsTo(models.Part);
        }
      }
    }, {
       tableName: 'parts_categories'
    });

    return Parts_Category;
};
