const express = require ("express")
const router = express.Router()
const controller = require("../controllers/task1.controllers")

// app.post("/dresstype", )
// app.post("/jeweltype", )
router.post("/dresstype" ,controller.createdress)
router.post("/jeweltype" ,controller.createjewel)

module.exports=router;