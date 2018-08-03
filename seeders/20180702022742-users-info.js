"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserInfos", [{
      user_id: 1,
      birthday: "1995-10-06 23:14:12",
      gender: "male",
      race: "asian",
      ethnicity: "indian",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    },{
      user_id: 2,
      birthday: "1995-10-06 23:14:12",
      gender: "male",
      race: "white",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    }, {
      user_id: 3,
      birthday: "1995-10-06 23:14:12",
      gender: "male",
      race: "asian",
      ethnicity: "indian",
      created_at: Sequelize.fn("NOW"),
      updated_at: Sequelize.fn("NOW")
    }], {})
  },

  down: (queryInterface, Sequelize) => {}
}
