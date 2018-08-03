"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      joined_by: {
        type: Sequelize.STRING
      },
      email_verified: {
        type: Sequelize.BOOLEAN
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      preferred_method: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("Users")
  }
}