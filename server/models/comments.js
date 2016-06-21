"use strict";

module.exports = function(sequelize, DataTypes) {
  let Comment = sequelize.define("Comment", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User);
        Comment.belongsTo(models.Order);
      }
    }
  });
  return Comment;
};
