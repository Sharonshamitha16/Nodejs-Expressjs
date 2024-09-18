const express = require("express")
const router =express.Router()
const controller = require("../controllers/account.controllers")
const {verifyToken}=require ("../middlewares/authToken")
router.post('/account',verifyToken,controller.createaccount)
module.exports=router