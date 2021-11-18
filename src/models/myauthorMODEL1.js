const mongoose=require('mongoose')
const Myauthor1Schema =new mongoose.Schema({
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

module.exports=mongoose.model('Myauthor1',Myauthor1Schema)     //collection name &&  schema name