const mongoose = require('mongoose')

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is Required',
        trim: true
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: 'Mobile number is Required',
        unique:true,
        trim: true
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'college',
        required: 'CollageId is Required'
    },
    isDeleted:{
        type:Boolean,
        default:false
      }
}, { timestamps: true })
module.exports = mongoose.model('intern', internSchema)