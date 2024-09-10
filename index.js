const express = require ("express"); //import statement by calling the express package as it's in function we need to call same like function 
const app = express(); // this is what calling the function and saving inn variable
app.use(express.json())
let data ={
    userName:"test user",
    age: 24,
    mobileNo: 12345678990
};

app.get("/userdata",(req,res)=>{ // getting the data from the 
res.json(data)
})

app.post("/createuser" ,(req,res)=>{
    let data ={
        ...req.body,
        email:"test@gmail.com"
    }
    res.json({
        data, 
        message:"user created"
    })
})
console.log("test", data)

const port =8080; // setting  the port 
app.listen(port,()=>{  // setting a callback function to show in console /terminal
    console.log("server running on port :", port);
    
}); 
app.use("/next", (req, res)=>{ // middleware setting
    res.send("server is alive in next pg")

})
app.use("/", (req, res)=>{ // middleware setting
    res.send("server is alive")
   
})


// app.listen(port)
// if(app.listen){
//     console.log("running successfully on port:",port)
// }
// else{
//     console.log("failed to run")
// }