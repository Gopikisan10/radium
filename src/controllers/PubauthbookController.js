const MYBook= require("../models/mybook1Model.js")
const MYAuthor= require("../models/myauthorMODEL1.js")
const mypublisher= require("../models/mypublisher.js")


const createmyBook= async function (req, res) {
    var data= req.body
    let checkid= await MYAuthor.findById(data.author)
    let checkpid= await mypublisher.findById(data.publisher)
    if(checkid && checkpid){
    let savedData= await MYBook.create(data)
    res.send({msg: savedData}) 
    }
    else{
        res.send("No id matches with this")
    }   
}

const createmyauthor= async function (req, res) {
    var value= req.body
    let savedData= await MYAuthor.create(value)
    res.send({msg: savedData})    
}

const createpublisher= async function (req, res) {
    var value= req.body
    let savedData= await mypublisher.create(value)
    res.send({msg: savedData})    
}

const getBooK= async function (req, res) {
    let savedData= await MYBook.find().populate({path:'author',select:{author_name:1,age:1}});
    res.send({msg: savedData})    
}

module.exports.createmyBook= createmyBook
module.exports.createmyauthor= createmyauthor
module.exports.createpublisher= createpublisher
module.exports.getBooK= getBooK
