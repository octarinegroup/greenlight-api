"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ExperimentTargets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      experiment_id: {
        type: Sequelize.INTEGER
      },
      max_age: {
        type: Sequelize.INTEGER
      },
      min_age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      race: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      ethnicity: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ExperimentTargets")
  }
}