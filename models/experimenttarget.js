"use strict"
module.exports = (sequelize, DataTypes) => {
  var ExperimentTarget = sequelize.define("ExperimentTarget", {
    experiment_id: DataTypes.INTEGER,
    max_age: DataTypes.INTEGER,
    min_age: DataTypes.INTEGER,
    gender: DataTypes.ARRAY(DataTypes.STRING),
    race: DataTypes.ARRAY(DataTypes.STRING),
    ethnicity: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    underscored: true
  })
  ExperimentTarget.associate = function(models) {
    // associations can be defined here
  }
  return ExperimentTarget
}