const express = require("express")
const app = express();
const mongoose = require("mongoose")
app.use(express.json())
mongoose.connect("mongodb+srv://sharonshamitha16:Sharon@cluster0.disqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Mongoose Connected");
    })
    .catch((e) => {
        console.log(`Connection Error ${e.message}`);
    })
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
app.post("/newregister", async (req, res) => {// post-create method in express  call back function is returned sending the user created value in req body
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
})
const port =8000; // setting  the port 
app.listen(port,()=>{  // setting a callback function to show in console /terminal
    console.log("server running on port :", port);
    
}); 

app.use("/", (req, res)=>{ // middleware setting
    res.send("server is alive")
   
})



// {
//     "username":"sharon",
//     "email":"sss@gmail.com",
//     "password":1234
// }