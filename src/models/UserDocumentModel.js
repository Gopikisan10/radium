const mongoose=require('mongoose')
const userdocSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100
    },
    address: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum : ['male','female','other'],
    },
    freeAppUser: {
        type: Boolean,
        default: false
    }

}, {timestamps: true} )

module.exports=mongoose.model('userdoc',userdocSchema)