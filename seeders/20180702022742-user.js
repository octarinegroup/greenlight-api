"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      username: "sidthekid134",
      password: "test",
      first_name: "Siddhardha",
      last_name: "Moparthi",
      joined_by: "local",
      email_verified: true,
      phone_number: "6032330060",
      preferred_method: "text",
      email: "siddhu.moparthi@gmail.com",
      company_name: "Octarine Group LLC",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    },{
      username: "derekbwarren",
      password: "test",
      first_name: "Derek",
      last_name: "Warren",
      joined_by: "local",
      email_verified: true,
      phone_number: "idkhisnumber",
      preferred_method: "text",
      email: "test@gmail.com",
      company_name: "Octarine Group LLC",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    }, {
      username: "ashishu",
      password: "test",
      first_name: "Ashish",
      last_name: "Uppala",
      joined_by: "local",
      email_verified: true,
      phone_number: "idkhisnumber",
      preferred_method: "text",
      email: "test@gmail.com",
      company_name: "Octarine Group LLC",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    }], {})
  },

  down: (queryInterface, Sequelize) => {}
}
