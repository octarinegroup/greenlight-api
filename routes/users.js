var express = require("express")
var router = express.Router()

const db = require("../models")
const Promise = require("bluebird")

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await db.User.findAll({
      include: [
        {
          model: db.UserInfo
        }
      ]
    })
    res.json(users)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post("/", async (req, res) => {
  try {
    const newUser = await db.User.create({
      username: req.body.username,
      password: req.body.password,
      joined_by: req.body.joinedBy,
      email_verified: req.body.emailVerified || false,
      phone_number: req.body.phoneNumber,
      preferred_method: req.body.preferredMethod,
      email: req.body.email,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      company_name: req.body.companyName
    })
    await db.UserInfo.create({
      birthday: req.body.UserInfo.birthday,
      gender: req.body.UserInfo.gender,
      race: req.body.UserInfo.race,
      ethnicity: req.body.UserInfo.ethnicity,
      user_id: newUser.id
    })
    res.json(newUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const user = await db.User.update({
      username: req.body.username,
      password: req.body.password,
      joined_by: req.body.joinedBy,
      email_verified: req.body.emailVerified || false,
      phone_number: req.body.phoneNumber,
      preferred_method: req.body.preferredMethod,
      email: req.body.email,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      company_name: req.body.companyName
    }, {
      where: {id: req.params.id}
    })
    if (req.body.UserInfo) {
      await db.UserInfo.update({
        birthday: req.body.UserInfo.birthday,
        gender: req.body.UserInfo.gender,
        race: req.body.UserInfo.race,
        ethnicity: req.body.UserInfo.ethnicity,
        user_id: user.id
      }, {
        where: {id: req.params.id}
      })
    }
    res.json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const userInfo = await db.UserInfo.findById(req.params.id)
    userInfo.destroy()
    const user = await db.User.findById(req.params.id)
    user.destroy()
    res.json(true)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
