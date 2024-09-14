const mongoose = require ("mongoose")
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

const dress = mongoose.model('dressfolder', dressSchema)
const jewel = mongoose.model('jewelfolder', jewellerytype)

module.exports={
    dress,
    jewel
}