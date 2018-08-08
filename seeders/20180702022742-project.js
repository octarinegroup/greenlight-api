"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [{
      user_id: 1,
      name: "Test Project 1",
      description: "To find out if people like taking surveys",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    },{
      user_id: 2,
      name: "Test Project 2",
      description: "To find out if people like making surveys.",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    }], {})
  },

  down: (queryInterface, Sequelize) => {}
}
