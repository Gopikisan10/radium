const mongoose=require('mongoose')
const MybookSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Myauthor'
    },
    price: {
        type: Number
    },
    ratings: {
        type: Number
    }

}, {timestamps: true} )

module.exports=mongoose.model('Mybook',MybookSchema) //Newbook=> is a collection name &&    NewbookSchema=>is a schema name