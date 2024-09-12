const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json());
mongoose.connect("mongodb+srv://sharonshamitha16:Sharon@cluster0.disqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Mongoose Connected..")
    })
    .catch((e) => {
        console.log(`connection error: ${e.message}`);

    })
const dressSchema = new mongoose.Schema({
    dressname: {
        type: String,
        required: true
    },
    dresstype: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }, fabric: {
        type: String,
        required: true
    }, count: {
        type: Number,
        required: true
    },

}, { timestamps: true })

const dress = mongoose.model('dress', dressSchema)
app.post("/dresstype", async (req, res) => {
    try {
        let dressUser = await dress.create(req.body);
        res.json({
            dressUser,
            message: "User dress created",
        })
    }
    catch (error) {
        res.json({
            Error: error
        });
    }
})
const jewellerytype = new mongoose.Schema({
    jewelname: {
        type: String,
        required: true
    },
    jeweltype: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }, carat: {
        type: String,
        required: true
    }, savarn: {
        type: Number,
        required: true
    },
    created: {
        type: String
    },
    PhoneNum: {
        type: Number
    }


}, { timestamps: true })

const jewel = mongoose.model('jewel', jewellerytype)



app.post("/jeweltype", async (req, res) => {
    try {
        let { PhoneNum } = req.body
        const checkphone = await jewel.findOne({ PhoneNum })

        if (checkphone) {
            return res.status(409).json("Phone num already exists")
        }

        let data = {
            ...req.body,
            created: "Success"
        }
        let jewelUser = await jewel.create(req.body);
        res.json({
            jewelUser,
            message: "User  jewel added",
        })
    }
    catch (error) {
        res.json({
            Error: error
        });
    }
})
app.use(express.json())
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
