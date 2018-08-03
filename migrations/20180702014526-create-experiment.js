"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Experiments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      total_budget: {
        type: Sequelize.INTEGER
      },
      max_people: {
        type: Sequelize.INTEGER
      },
      amount_disbursed: {
        type: Sequelize.INTEGER
      },
      payment_processed: {
        type: Sequelize.BOOLEAN
      },
      survey_in_progess: {
        type: Sequelize.BOOLEAN
      },
      completion_date: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable("Experiments")
  }
}