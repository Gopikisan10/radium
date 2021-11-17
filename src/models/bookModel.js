const mongoose=require('mongoose')

const allbookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorname: String,
    tags: [String], 
    year:{
        type: Number,
        default:2021},
    prices: {
        indianPrice: String,
        europeanPrice: String,   
    },
    totalpages:Number,
    stockavailable:Boolean
}, { timestamps: true })

module.exports = mongoose.model( 'AllBook', allbookSchema ) 



// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging