// const {reg,login} =require('../controllers/register.controller')
const express= require("express")
const router =express.Router()
const controller = require("../controllers/register.controller");
router.post("/newregister", controller.reg)
router.post("/login",controller.login)
module.exports=router;