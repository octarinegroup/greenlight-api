const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", function(req, res) {
  res.status(200).send({ message: "homepage" })
})

router.get("/healthcheck", function(req, res) {
  res.status(200).send({ status: "active" })
})

module.exports = router
