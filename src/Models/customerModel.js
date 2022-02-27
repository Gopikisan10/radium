const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobileNumber: {
        type: String,
        unique:true

    },
    DOB: {
        type: Date
    },
    emailID: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String
    },
    status: {
        type: String,
        default: "Active"
    }
})
module.exports = mongoose.model('customer', CustomerSchema) 