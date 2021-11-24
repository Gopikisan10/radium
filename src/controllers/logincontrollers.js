const userpass = require("../models/RegisteruserModels.js")
const jwt = require("jsonwebtoken")
const mAKEuser = async function (req, res) {
    let data = req.body
    let savedData = await userpass.create(data)
    res.send({ msg: savedData })
}


const login = async function (req, res) {
    let value = req.body
    value.isDeleted=false;
    if(value && value.name && value.password){
    let Users = await userpass.findOne(value)
    if (Users) {
            let payload = { userId: Users._id }
            let token = jwt.sign(payload, 'radium');
            res.header('x-auth-token', token)
            res.status(200).send({ status: true, data: { Userid: Users._id }, Token: token })
        }
        else {
            res.send({ status: false, msg: "error invalid name or password" })
        }
    }
    else {
        res.send({ status: false, msg: "Please provide detail of name and password" })
    }
}

const showlogin = async function (req, res) {
    if (req.validtoken.userId == req.params.userId) {
        let user = await userpass.findOne({ _id: req.params.userId, isDeleted: false })
        if (user) {
            res.status(200).send({ status: true, data: user })
        }
        else {
            res.send({ status: false, msg: "User Unable to find" })
        }
    }
    else {
        res.send({ status: false, msg: "Not authorised" })
    }
}

const updateonuser = async function (req, res) {
    let data = req.params     //params have userId that we have pass in url or say path
    let emailinBody=req.body
    let savedData = await userpass.findOneAndUpdate(data.userId, { email: emailinBody.email }, { new: true })
    if (savedData) {
        res.send({ status: true, msg: savedData })
    }
    else {
        res.send({ status: false, msg: "Unable to find u with this userId" })
    }
}

module.exports.mAKEuser = mAKEuser
module.exports.login = login
module.exports.showlogin = showlogin
module.exports.updateonuser = updateonuser
