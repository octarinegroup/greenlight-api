"use strict"
module.exports = (sequelize, DataTypes) => {
  var ExperimentTag = sequelize.define("ExperimentTag", {
    experimenttarget_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    underscored: true
  })
  ExperimentTag.associate = function(models) {
    // associations can be defined here
  }
  return ExperimentTag
}