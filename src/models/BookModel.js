const mongoose=require('mongoose')
const bookcollectionSchema =new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    price: {
        indianPrice: String,
        europeanPrice: String,
    },
    year: {
        type: String,
        default: 2021
    },
    authorName: {
        type: String
    },
    tags: [ String ],
    Totalpages: {
        type: String
    },
    StockAvilable: {
        type: Boolean
    },

}, {timestamps: true} )

module.exports=mongoose.model('Bookcollection',bookcollectionSchema)