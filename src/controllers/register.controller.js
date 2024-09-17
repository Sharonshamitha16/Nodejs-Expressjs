const register = require("../models/register.model")
const passwordGenerator = require("../utils/GeneratePassword")
const mailsend = require('../utils/sendmail')
const bcrypt = require('bcrypt');
const reg = async (req, res) => {// post-create method in express  call back function is returned sending the user created value in req body
    try {
        let { email, username } = req.body
        const checkmail = await register.findOne({ email }); // here the mongoose model which stores in the variable 

        if (checkmail) {
            return res.status(409).json("Email Already Exists")// to stop a function we need to give return 
        }
        let password = passwordGenerator(8);
        let hashpassword = await bcrypt.hash(password, 10)
        
        
        let data = {
            ...req.body, 
            password: hashpassword,
            created: "Success"
        }
        const createUser = await register.create(data) //inserting data in body
        await mailsend(email, username, password)
        console.log("mail sent");
        res.json({
            createUser,
            Message: "User Created"
        })
    }
    catch (error) {
        res.json({
            Error: error.message
        })
    }
}

const login =async(req,res)=>{
    try{
        let {email,password} =req.body;
        const checkmail =await register.findOne({email})
        if(!checkmail){
            return res.status(404).json({message: "invalid mail..."})
            
        }
        const checkpassword =await bcrypt.compare(password,checkmail.password)
        if(!checkpassword){
            return res.status(404).json({message: "invalid password..."})

        }
        res.json({checkmail,message:"login successfull...."})
    }
    catch(e){
        res.json({
            Error: error.message
        })
}
}
module.exports = {
    reg,login // imported the above one const reg= async (req, res) => {

}