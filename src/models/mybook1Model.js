const mongoose=require('mongoose')
const Mybook1Schema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Myauthor1'
    },
    price: {
        type: Number
    },
    ratings: {
        type: Number
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'mypublisher'
    }

}, {timestamps: true} )

module.exports=mongoose.model('Mybook1',Mybook1Schema) //Newbook=> is a collection name &&    NewbookSchema=>is a schema name