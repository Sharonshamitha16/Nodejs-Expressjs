const express = require("express")

const connection = require("./src/config/connection")

const router = require('./src/routes/register.route');
const accountRouter =require('./src/routes/account.routes')
require('dotenv').config();

const app = express();
app.use(express.json())


connection();

app.use(router)
app.use(accountRouter)

const port =7091; // setting  the port 
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