"use strict"
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    joined_by: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN,
    phone_number: DataTypes.STRING,
    preferred_method: DataTypes.STRING,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {
    underscored: true
  })
  User.associate = function(models) {
    User.hasOne(models.UserInfo)
  }
  return User
}