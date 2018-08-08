"use strict"
module.exports = (sequelize, DataTypes) => {
  var UserInfo = sequelize.define("UserInfo", {
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    race: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true
  })
  UserInfo.associate = function(models) {
    
  }
  return UserInfo
}