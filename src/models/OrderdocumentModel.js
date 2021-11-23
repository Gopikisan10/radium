const mongoose=require('mongoose')
const oredrdocSchema =new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'userdoc'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'productdoc'
    },
    isFreeAppUser: {
        type: Boolean,
    },
    amount:{
        type: Number
    },
    date: {
        type: Date
    }
}, {timestamps: true} )

module.exports=mongoose.model('oredrdoc',oredrdocSchema)