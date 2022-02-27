const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema=new mongoose.Schema({
    cardNumber:{
        type:String
    },
    cardType:{
        type:String
    },
    customerName:{
        type:String 
    },
    status:{
        type:String,
        default:"Active"
    },
    vision:{
        type:String
    },
    customerID: {
        type: ObjectId,
        ref: 'customer'
    }

} )
module.exports = mongoose.model( 'card', cardSchema ) 