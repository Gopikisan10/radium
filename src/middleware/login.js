const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const customerModel = require("../Models/customerModel");

const login = async function (req, res) {
    try {
        let useremail = req.body.emailID  
        let mobileNumber = req.body.mobileNumber
        if (useremail && mobileNumber) {
            let User = await customerModel.findOne({ emailID: useremail, mobileNumber: mobileNumber })

            if (User) {
                const Token = jwt.sign({ userId: User._id }, "Thunders")
                res.header('x-api-key', Token)
         
                res.status(200).send({ status: true })
            } else {
                res.status(400).send({ status: false, Msg: "Invalid Credentials" })
            }
        } else {
            res.status(400).send({ status: false, msg: "Body must contain  email and password" })
        }
    }
    catch (err) {
        res.status(500).send({ status:false,message: err.message})
    }
}

module.exports.login = login