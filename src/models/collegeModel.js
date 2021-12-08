const mongoose=require('mongoose')

const collegeSchema= new mongoose.Schema({
  name:{
    type:String,    //example-iith
    required:'college name is mandatory',
    unique: true,
    lowercase:true,
    trim:true
  },
  fullName:{
    type:String, //example-`Indian Institute of Technology, Hyderabad`
    required: 'full name is mandatory',
    trim:true
  },
  logoLink:{
    type:String,
    required:'logo link is mandatory',
    },
  isDeleted:{
    type:Boolean,
    default:false
  }

},{ timestamps: true })

collegeSchema.path('logoLink').validate((val) => {
  urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, 'Invalid URL.');

module.exports=mongoose.model("college",collegeSchema)