const Newbook= require("../models/NewbookModel.js")
const Author= require("../models/AuthorModel.js")

const addbooktodb= async function (req, res) {
    var data= req.body
    let savedData= await Newbook.create(data)
    res.send({msg: savedData})    
}

const addauthordb= async function (req, res) {
    var value= req.body
    let savedData= await Author.create(value)
    res.send({msg: savedData})    
}

const findbookwthauthor= async function (req, res) {
    var value= req.body
   let allUsers= await Author.findOne(value).select({author_id: 1, _id:0})
    let savedData= await Newbook.find(allUsers)
    res.send({msg: savedData})    
}

const findauthorname= async function (req, res) {
    var value= req.body
   let allUsers= await Newbook.findOneAndUpdate(value,{price:100},{new:true}).select({author_id: 1, _id:0})
   let bookwillbe=await Newbook.findOne(value).select({name: 1, price: 1,ratings: 1, _id:0})
   let savedData= await Author.findOne(allUsers).select({author_name: 1, author_id: 1, age: 1, address:1, _id:0})
    res.send({AuthorNameDetails: savedData,UpdatedBookPrice:bookwillbe})    
}

const findbook= async function (req, res) {
   let allUsers= await Newbook.find({$and:[{price:{$gte:50}},{price:{$lte:100}}]}).select({author_id: 1, _id:0})
   console.log(allUsers)
    let savedata= await Author.find({$or:allUsers}).select({author_name: 1, author_id: 1, age: 1, address:1, _id:0})
    res.send({msg: savedata})    
}
module.exports.addbooktodb= addbooktodb
module.exports.addauthordb= addauthordb
module.exports.findbookwthauthor= findbookwthauthor
module.exports.findauthorname= findauthorname
module.exports.findbook= findbook