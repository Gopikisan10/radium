const mongoose=require('mongoose')
const MyauthorSchema =new mongoose.Schema({
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

module.exports=mongoose.model('Myauthor',MyauthorSchema)     //collection name &&  schema name