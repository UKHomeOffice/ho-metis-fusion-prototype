const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get("/prototype-start", (req, res) => {
  req.session.data["personalise"] = ["my-tasks", "track-my-requests", "annual-leave", "pay", "team-absences", "team-performance-rewards", "find-someone", "get-help", "guidance", "metis-alerts"]
  req.session.data["user-type"] = "line-manager"
  res.redirect("line-manager/index")
})

router.get("/prototype-start-notification", (req, res) => {
  req.session.data["personalise"] = ["my-tasks", "track-my-requests", "annual-leave", "pay", "team-absences", "team-performance-rewards", "find-someone", "get-help", "guidance", "metis-alerts"]
  req.session.data["user-type"] = "line-manager"
  res.redirect("line-manager/index-notification")
})

router.get("/prototype-start-general", (req, res) => {
  req.session.data["personalise"] = ["my-tasks", "track-my-requests", "annual-leave", "pay", "expenses", "learning", "find-someone", "get-help", "guidance", "metis-alerts"]
  req.session.data["user-type"] = "general"
  res.redirect("general/index")
})

router.get("/prototype-start-general-notification", (req, res) => {
  req.session.data["personalise"] = ["my-tasks", "track-my-requests", "annual-leave", "pay", "expenses", "learning", "find-someone", "get-help", "guidance", "metis-alerts"]
  req.session.data["user-type"] = "general"
  res.redirect("general/index-notification")
})

module.exports = router