"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // create one to many relationship
        User.hasMany(models.Post);
      }
    }
  });
  return User;
};
