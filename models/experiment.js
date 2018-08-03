"use strict"
module.exports = (sequelize, DataTypes) => {
  var Experiment = sequelize.define("Experiment", {
    project_id: DataTypes.INTEGER,
    total_budget: DataTypes.INTEGER,
    max_people: DataTypes.INTEGER,
    amount_disbursed: DataTypes.INTEGER,
    payment_processed: DataTypes.BOOLEAN,
    survey_in_progess: DataTypes.BOOLEAN,
    completion_date: DataTypes.DATE
  }, {
    underscored: true
  })
  Experiment.associate = function(models) {
    // associations can be defined here
  }
  return Experiment
}