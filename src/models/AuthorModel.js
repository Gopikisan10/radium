const mongoose=require('mongoose')
const AuthorSchema =new mongoose.Schema({
    author_id: {
        type: Number,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    address: {
        type: String
    }

}, {timestamps: true} )

module.exports=mongoose.model('Author',AuthorSchema)     //collection name &&  schema name