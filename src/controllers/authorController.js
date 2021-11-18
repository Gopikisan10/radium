const NewAuthorModel= require("../models/authorModel.js")

const mongoose= require("mongoose")

const createauthor = async function(req,res){
    const author = req.body
    let savedauthor= await NewAuthorModel.create(author)
    res.send({msg: savedauthor})
}


module.exports.createauthor = createauthor;