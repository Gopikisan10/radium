const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const ObjectId2 = mongoose.Schema.Types.ObjectId

const mybookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    publisher:{
        type: ObjectId2,
        ref :'MyPublisher'
    },
	price:Number,
	ratings:String,


} )
module.exports = mongoose.model( 'myBook', mybookSchema ) 

