const mongoose=require('mongoose')

const myauthorSchema=new mongoose.Schema({
    author_name:{
        type:String,
        required:true
    },
    age:Number,
    address:String

} )

module.exports = mongoose.model('myAuthor', myauthorSchema)
