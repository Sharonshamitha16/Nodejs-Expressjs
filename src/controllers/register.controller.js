const register= require("../models/register.model")
const reg= async (req, res) => {// post-create method in express  call back function is returned sending the user created value in req body
    try {
        let {email}=req.body
        const checkmail = await register.findOne({ email }); // here the mongoose model which stores in the variable 

        if(checkmail){
             return res.status(409).json("Email Already Exists")// to stop a function we need to give return 
        }
        let data={
            ...req.body,
            created:"Success"
        }
        const createUser = await register.create(req.body) //inserting data in body
        res.json({ 
            createUser,
            Message: "User Created"
        })
    }
    catch (error) {
        res.json({
            Error: error
        })
    }
}

module.exports={
    reg // imported the above one const reg= async (req, res) => {

}