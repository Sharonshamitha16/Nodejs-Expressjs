const express = require("express")
const app = express()
app.use(express.json());
const connection =require("./src/config/connection")
const router = require('./src/routes/task1.route')
require('dotenv').config()
connection()
app.use(router)
const port = 8000; // setting  the port 
app.listen(port, () => {  // setting a callback function to show in console /terminal
    console.log("server running on port :", port);
});
app.use("/", (req, res) => { // middleware setting
    res.send("server is alive")

})



// {
//     "dressname":"saree",
//     "dresstype":"designer",
//     "amount":2000,
//     "fabric":"jarjet",
//     "count":1

// }

// {
//     "jewelname":"necklace",
//     "jeweltype":"gold",
//     "amount":20000,
//     "carat":"24",
//     "savarn":2

// }
