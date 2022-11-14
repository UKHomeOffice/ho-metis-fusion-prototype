const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get("/prototype-start", (req, res) => {
    req.session.data["my-tasks"] = "my tasks"
    req.session.data["track-requests"] = "track my requests"
    req.session.data["annual-leave"] = "annual leave"
    req.session.data["pay"] = "pay"
    req.session.data["team-absences"] = "team absences"
    req.session.data["team-performance-rewards"] = "team performance rewards"
    req.session.data["find-someone"] = "find someone"
    req.session.data["get-help"] = "get help"
    req.session.data["guidance"] = "guidance"
    res.redirect("line-manager/index")
})

// router.use("/prototype-start", router)


module.exports = router
