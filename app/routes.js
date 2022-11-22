const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get("/prototype-start", (req, res) => {
    req.session.data["personalise"] = ["my-tasks", "track-my-requests", "annual-leave", "pay", "team-absences", "team-performance-rewards", "find-someone", "get-help", "guidance"]
    res.redirect("line-manager/index")
})

router.get("/prototype-start-general", (req, res) => {
    req.session.data["personalise"] = ["my-tasks-2", "track-my-requests-2", "annual-leave-2", "pay-2", "expenses-2", "learning-2", "find-someone-2", "get-help-2", "guidance-2"]
    res.redirect("general/index")
})

// router.use("/prototype-start", router)


module.exports = router
