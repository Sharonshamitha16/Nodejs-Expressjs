
const express= require("express")
const router =express.Router()
const controller = require("../controllers/register.controller")
router.post("/newregister", controller.reg)

module.exports=router;