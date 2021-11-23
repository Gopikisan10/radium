// const userpass = require("../models/RegisteruserModels.js")

// const mAKEuser = async function (req, res) {
//     let data = req.body
//     let savedData = await userpass.create(data)
//     res.send({ msg: savedData })
// }


// const login = async function (req, res) {
//     let value = req.body
//     let allUsers = await userpass.findOne(value)
//     if (allUsers) {
//         if (allUsers.isDeleted === false) {
//             res.send({ status: true, msg: "u r login" })
//         }
//         else {
//             res.send({ status: false, msg: "your account is deleted" })
//         }
//     }
//     else {
//         res.send({ status: false, msg: "Unable to find u" })
//     }
// }

// const showlogin = async function (req, res) {
//     let value = req.body
//     let allUsers = await userpass.findOne(value)
//     if (allUsers) {
//         if (allUsers.isDeleted === false) {
//             res.send({ status: true, msg: allUsers })
//         }
//         else {
//             res.send({ status: false, msg: "your account is deleted" })
//         }
//     }
//     else {
//         res.send({ status: false, msg: "Unable to find u" })
//     }
// }

// const updateonuser = async function (req, res) {
//     let data = req.body
//     let savedData = await userpass.findOneAndUpdate(data.userId, { email: data.email }, { new: true })
//     if(savedData){
//     res.send({ status: true, msg: savedData })
//     }
//     else {
//         res.send({ status: false, msg: "Unable to find u with this userId" })
//     }
// }

// module.exports.mAKEuser = mAKEuser
// module.exports.login = login
// module.exports.showlogin = showlogin
// module.exports.updateonuser = updateonuser
