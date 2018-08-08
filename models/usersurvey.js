"use strict"
module.exports = (sequelize, DataTypes) => {
  var UserSurvey = sequelize.define("UserSurvey", {
    user_id: DataTypes.INTEGER,
    survey_id: DataTypes.INTEGER,
    completion_date: DataTypes.DATE
  }, {
    underscored: true
  })
  UserSurvey.associate = function(models) {
    // associations can be defined here
  }
  return UserSurvey
}