const {dress,jewel} = require("../models/task1.models")


const createdress =async (req, res) => {
    try {
        let dressUser = await dress.create(req.body);
        res.json({
            dressUser,
            message: "User dress created",
        })
    }
    catch (error) {
        res.status(500).json({
            Error: error.message
        });
    }
}

const createjewel =async (req, res) => {
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
}
module.exports={
    createdress,createjewel
}
