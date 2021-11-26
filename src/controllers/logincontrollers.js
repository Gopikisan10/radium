// const userpass = require("../models/RegisteruserModels.js")
// const jwt = require("jsonwebtoken")

// const mAKEuser = async function (req, res) {
//     let data = req.body
//     let savedData = await userpass.create(data)
//     res.status(200).send({ msg: savedData })
// }


// const login = async function (req, res) {
//     let value = req.body
//     value.isDeleted = false;
//     if (value && value.name && value.password) {
//         let Users = await userpass.findOne(value)
//         if (Users) {
//             //we will copy _id from User and give it to userId of payload
//             let payload = { userId: Users._id }
//             let token = jwt.sign(payload, 'radium');
//             res.header('x-auth-token', token)
//             res.status(200).send({ status: true, data: { Userid: Users._id }, Token: token })
//         }
//         else {
//             res.status(401).send({ status: false, msg: "invalid name or password" })
//         }
//     }
//     else {
//         res.status(400).send({ status: false, msg: "Please enter name and password" })
//     }
// }

// const showlogin = async function (req, res) {
//     console.log(req)
//     let user = await userpass.findOne({ _id: req.params.userId, isDeleted: false })
//     //isDeleted: false=> it is added to above line because for searching user with not deleted acc.
//     if (user) {
//         res.status(200).send({ status: true, data: user })
//     }
//     else {
//         res.status(404).send({ status: false, msg: "Unable to find User" })
//     }
// }

// const updateonuser = async function (req, res) {
//     let savedData = await userpass.findOneAndUpdate(req.params.userId, { email: req.body.email }, { new: true })
//     //params have userId that we have pass in url or say path
//     if (savedData) {
//         res.status(200).send({ status: true, msg: savedData })
//     }
//     else {
//         res.status(404).send({ status: false, msg: "Unable to find User" })
//     }
// }

// module.exports.mAKEuser = mAKEuser
// module.exports.login = login
// module.exports.showlogin = showlogin
// module.exports.updateonuser = updateonuser
