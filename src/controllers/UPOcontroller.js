const Userdoc = require("../models/UserdocumentModel.js")
const Productdoc = require("../models/ProductdocumentModel.js")
const Orderdoc = require("../models/OrderdocumentModel.js")

const makeproduct = async function (req, res) {
    var value = req.body
    let savedData = await Productdoc.create(value)
    res.send({ msg: savedData })
}

const makeuser = async function (req, res) {
    var value = req.body
    let savedData = await Userdoc.create(value)
    res.send({ msg: savedData })
}

const makeorder = async function (req, res) {
    let data = req.body
    let value = req.isFreeAppUser
    let checkuserid = await Userdoc.findById(data.userId)
    let checkproductid = await Productdoc.findById(data.productId)
    if (checkuserid && checkproductid) {
        if (value == true) {
            let savedData = await Orderdoc.create(data)
            res.send({ msg: savedData })
        }
        else if (value == false) {
            if (checkuserid.balance >= checkproductid.price) {
                leftuserbalance = checkuserid.balance - checkproductid.price;
                data.amount = checkproductid.price;
                let saVEDdata = await Userdoc.findOneAndUpdate(checkuserid, { balance: leftuserbalance }, { new: true })
                let savedDatA = await Orderdoc.create(data)
                res.send({ msg: savedDatA })
            }
            else {
                res.send("Insufficient balance user have")
            }
        }
    }
    else {
        res.send("No id matches with this")
    }
}


module.exports.makeproduct = makeproduct
module.exports.makeuser = makeuser
module.exports.makeorder = makeorder