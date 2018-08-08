const express = require("express")
const db = require("../models")
const Promise = require("bluebird")
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const allProjects = await db.Project.findAll()
    res.json(allProjects)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const projectInfo = await db.Project.findById(req.params.id)
    res.json(projectInfo)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post("/", async (req, res) => {
  try {
    const result = await db.Project.create({
      user_id: req.body.userId,
      name: req.body.name,
      description: req.body.description
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const project = await db.Project.update({
      user_id: req.body.userId,
      name: req.body.name,
      description: req.body.description
    }, {
      where: {id: req.params.id}
    })
    res.json(project)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const project = await db.Project.findById(req.params.id)
    project.destroy()
    res.json(true)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router