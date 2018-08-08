"use strict"
module.exports = (sequelize, DataTypes) => {
  var Survey = sequelize.define("Survey", {
    experiment_id: DataTypes.INTEGER,
    estimated_completion_time: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    underscored: true
  })
  Survey.associate = function(models) {
    // associations can be defined here
  }
  return Survey
}