const mongoose =require("mongoose");
const {v4}= require("uuid")
const registerSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    username: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    userId:{
        type:String,
        default:v4
    },
    created:{
        type:String
    }
}, { timestamps: true })

const register = mongoose.model("newregister", registerSchema)// register denotes the folder in mongodb , registerschema is schema we created


module.exports=register 