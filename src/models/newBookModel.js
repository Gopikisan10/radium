const mongoose=require('mongoose')

const newBookSchema= new mongoose.Schema({ 

    name:{
        type:String,
        required:true
    },

        author_id:{
            type:Number,
            required:true
        },
        
        price:Number,

        rating:String

}, {timestamps: true} )

module.exports = mongoose.model( 'newBook', newBookSchema ) 

