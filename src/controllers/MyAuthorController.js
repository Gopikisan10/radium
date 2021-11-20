const MyAuthorModel = require("../models/MyAuthorModel.js");
const mongoose = require("mongoose");

const pushauthor = async function (req, res) {
    const author = req.body;
    let saveddata = await MyAuthorModel.create(author);
    res.send({ msg: saveddata });
  };


 module.exports.pushauthor = pushauthor; 