const express = require ("express");
const app = express();
const port =8080;
app.listen(port,()=>{
    console.log("server running on port :", port);
    
}); 
app.use("/next", (req, res)=>{
    res.send("server is alive in next pg")

})
app.use("/", (req, res)=>{
    res.send("server is alive")

})

// app.listen(port)
// if(app.listen){
//     console.log("running successfully on port:",port)
// }
// else{
//     console.log("failed to run")
// }