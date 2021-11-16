const BookModel= require("../models/BookModel.js")

const createbookcoll= async function (req, res) {
    var data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})    
}


const getbookDatacoll= async function (req, res) {
    let allUsers= await BookModel.find().select({bookName: 1, authorName: 1, _id:0})
    res.send({msg: allUsers})
}

const getBooksInYear= async function (req, res) {
    var data= req.body
    let saveddata= await BookModel.find(data)
    res.send({msg: saveddata})    
}

const getParticularBooks= async function (req, res) {
    //var value= req.body
    let savededdata= await BookModel.find(req.body)
    res.send({msg: savededdata})    
}

const getXINRBooks= async function (req, res) {
    let savededdata= await BookModel.find({ 'price.indianPrice' : {$in: ["100INR", "200INR", "500INR"] } } )
    res.send({msg: savededdata})    
}

const getRandomBooks= async function (req, res) {
    let savededdata= await BookModel.find({ $or: [ {StockAvilable: true} , { Totalpages: {$gt: 500} }   ] } )
    res.send({msg: savededdata})    
}

module.exports.createbookcoll= createbookcoll
module.exports.getbookDatacoll= getbookDatacoll
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks