const mongoose = require("mongoose")
const {v4}= require("uuid")
const accountAschema= new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    accountNo:{
        type:String,
        default:v4
    },
    email:{
        type:String
    },
    picture:{
        type:String
    }
},{timestamps:true})
const AccountModel =mongoose.model("account",accountAschema)
module.exports=AccountModel