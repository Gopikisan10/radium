const mongoose=require('mongoose')
const mypublisherSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    headQuarter: {
        type: String
    }
}, {timestamps: true} )

module.exports=mongoose.model('mypublisher',mypublisherSchema)     //collection name &&  schema name