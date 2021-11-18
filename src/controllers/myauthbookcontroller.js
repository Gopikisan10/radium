const mybook= require("../models/MybookModel.js")
const myauthor= require("../models/MyauthorModel.js")

const CReateBook= async function (req, res) {
    var data= req.body
    console.log
    let checkid= await myauthor.findById(data.author)
    if(checkid){
    let savedData= await mybook.create(data)
    res.send({msg: savedData}) 
    }
    else{
        res.send("No id matches with this")
    }   
}

const createAuthor= async function (req, res) {
    var value= req.body
    let savedData= await myauthor.create(value)
    res.send({msg: savedData})    
}

const check123= async function (req, res) {
    let savedData= await mybook.find().populate('author')
    res.send({msg: savedData})    
}

module.exports.CReateBook= CReateBook
module.exports.createAuthor= createAuthor
module.exports.check123= check123