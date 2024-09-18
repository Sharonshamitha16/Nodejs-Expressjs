const express = require ("express"); //import statement by calling the express package as it's in function we need to call same like function 
const mongoose = require("mongoose")
const app = express(); // this is what calling the function and saving inn variable
app.use(express.json());
require('dotenv').config()
// mongoose.connect("mongodb+srv://sharonshamitha16:Sharon@cluster0.disqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb+srv://snandhadeveloper592000:nandha56200@cluster0.s6ufz.mongodb.net/server_006?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Mongoose connected");
    
})
.catch((e)=>{
    console.log(`connection error :${e.message}`);
    
})


const registerSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    age: {
        type: Number,
        required: true
      },
    userType:{
        type:String,
        default:"test"
    },
    role:{
        type:String,
        enum:["teacher","student","parent"]
    },
    
} ,{timestamps:true})

const register=mongoose.model('Sharon',registerSchema);
app.post("/register", async (req, res) => {
    try {
      let createUser = await register.create(req.body);
      res.json({
        createUser,
        message: "User created",
      });
    } catch (error) {
      res.json({
        Error: error
      });
    }
  });
  

app.use(express.json())
// let data ={
//     userName:"test user",
//     age: 24,
//     mobileNo: 12345678990
// };

// app.get("/userdata",(req,res)=>{ // getting the data from the 
// res.json(data)
// })

// app.post("/createuser" ,(req,res)=>{
//     let data ={
//         ...req.body,
//         email:"test@gmail.com"
//     }
//     res.json({
//         data, 
//         message:"user created"
//     })
// })
// console.log("test", data)

const port =8080; // setting  the port 
app.listen(port,()=>{  // setting a callback function to show in console /terminal
    console.log("server running on port :", port);
    
}); 
// app.use("/next", (req, res)=>{ // middleware setting
//     res.send("server is alive in next pg")

// })
// app.use("/", (req, res)=>{ // middleware setting
//     res.send("server is alive")
   
// })


// app.listen(port)
// if(app.listen){
//     console.log("running successfully on port:",port)
// }
// else{
//     console.log("failed to run")
// }



// {
//   "userName": "Sharon Shamitha S",
//   "email": "SharonShamithas@gmail.com",
//   "age": 22,
//   "userType": "test",
//   "role": "student"
// }
