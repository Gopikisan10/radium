const mongoose=require('mongoose')
const NewbookSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author_id: {
        type: Number,
        required: true
    },
    price: {
        type: Number
    },
    ratings: {
        type: Number
    }

}, {timestamps: true} )

module.exports=mongoose.model('Newbook',NewbookSchema) //Newbook=> is a collection name &&    NewbookSchema=>is a schema name