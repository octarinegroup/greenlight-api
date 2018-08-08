"use strict"
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define("Project", {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    underscored: true
  })
  Project.associate = function(models) {
    // associations can be defined here
  }
  return Project
}