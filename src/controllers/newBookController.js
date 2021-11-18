const NewBookModel = require("../models/newBookModel.js")
const mongoose= require("mongoose")
const AuthorModel = require("../models/authorModel.js")

const createnewbook = async function(req,res){
    const book = req.body
    let savedbook= await NewBookModel.create(book)
    res.send({msg: savedbook})
}


const findnewbook = async function(req,res){
    const findbook =await AuthorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0});
    let findnewbooks = await NewBookModel.find(findbook).select({name:1,_id:0});
    res.send({findnewbooks})
}

const changePrice = async function(req,res){
    const allbook =await NewBookModel.findOne({name: "Two states"}).select({author_id:1,_id:0});
    let author = await AuthorModel.findOne(allbook).select({author_name:1,_id:0});
    let updatedprice = await NewBookModel.findOneAndUpdate({name: "Two states"},{price:100},{new:true}).select({price:1,_id:0});
    res.send({msg:author,updatedprice})

}

const givenbook = async function(req,res){
    const book = await NewBookModel.find({price:{$gt:49,$lt:101}}).select({author_id:1,_id:0});
    const author = await AuthorModel.find({$or:book}).select({author_name:1,_id:0});
    res.send({msg:author})
}



module.exports.changePrice = changePrice;
module.exports.createnewbook = createnewbook;
module.exports.findnewbook = findnewbook;
module.exports.givenbook = givenbook;