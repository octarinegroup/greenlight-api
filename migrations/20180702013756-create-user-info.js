"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      ethnicity: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("UserInfos")
  }
}