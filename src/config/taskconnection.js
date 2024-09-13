const mongoose = require ("mongoose")
const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb Connected...!! ")
    }
    catch(e){
        console.log(`connection Error ${e.message}`);  
    }
}
module.exports=connection