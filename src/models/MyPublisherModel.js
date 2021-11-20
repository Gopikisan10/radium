const mongoose=require('mongoose')


const mypublisherSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    headQuarter: String

} )

module.exports = mongoose.model( 'MyPublisher',mypublisherSchema )

