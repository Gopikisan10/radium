const MyBookModel = require("../models/MyBookModel.js");
const mongoose = require('mongoose');
const MyAuthorModel = require("../models/MyAuthorModel.js");
const MyPublisherModel = require('../models/MyPublisherModel');


const pushbook = async function (req, res) {
    const book = req.body;
    let savedBook = await MyBookModel.create(book);
    res.send({ msg: savedBook });
  };
const createbook = async function (req,res){
    let data = req.body;
    let authorid = req.body.author;
    let publisherid =req.body.publisher
    let authorfromrequest = await MyAuthorModel.findById(authorid);
    let publisherfromrequest = await MyPublisherModel.findById(publisherid);
    //console.log(authorfromrequest)
    if(!authorfromrequest || !publisherfromrequest){
        res.send('the author or publisher  id is invalid')
    } else{
        let bookcreated = await MyBookModel.create(data)
        res.send({data:bookcreated})
    }


}  
const myBooks = async function (req, res) {
    let allBooks = await MyBookModel.find().populate(['publisher','author']);
    res.send({ msg: allBooks });
  };

  const publisher = async function (req, res) {
    const publish = req.body;
    let savedpublish = await MyPublisherModel.create(publish);
    res.send({ msg: savedpublish });
  };  

  const basicroute = async function(req,res){
    console.log("congratulation you are in handler");
    res.send('this is coming from handlerS');
  }

module.exports.pushbook = pushbook ;
module.exports.myBooks = myBooks; 
module.exports.createbook = createbook;
module.exports.publisher = publisher;
module.exports.basicroute = basicroute;