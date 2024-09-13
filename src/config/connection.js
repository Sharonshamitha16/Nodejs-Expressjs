const mongoose = require("mongoose")
// process.env.MONGO_URL "mongodb+srv://sharonshamitha16:Sharon@cluster0.disqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected...!!");

    }
    catch (e) {
        console.log(`Connection Error ${e.message}`);
    }
}

module.exports = connection  // exporting which is imported const connection = async () => {