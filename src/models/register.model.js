const mongoose =require("mongoose");
const registerSchema = new mongoose.Schema({
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
    created:{
        type:String
    }
}, { timestamps: true })

const register = mongoose.model("newregister", registerSchema)// register denotes the folder in mongodb , registerschema is schema we created


module.exports=register 