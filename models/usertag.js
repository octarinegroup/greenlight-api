"use strict"
module.exports = (sequelize, DataTypes) => {
  var UserTag = sequelize.define("UserTag", {
    user_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    underscored: true
  })
  UserTag.associate = function(models) {
    // associations can be defined here
  }
  return UserTag
}