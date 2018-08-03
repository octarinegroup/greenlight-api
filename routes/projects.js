const express = require("express")
const db = require("../models")

const router = express.Router()

router.get("/", async (req, res) => {
  const allProjects = await db.Project.findAll()
  res.json(allProjects)
})

router.get("/:id", async (req, res) => {
  const projectInfo = await db.Project.findById(req.params.id)
  res.json(projectInfo)
})

router.post("/", async (req, res) => {
  const result = await db.Project.create({
    user_id: req.body.userId,
    name: req.body.name,
    description: req.body.description
  })
  res.json(result)
})

module.exports = router