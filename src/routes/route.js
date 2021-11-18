const express = require('express');
const router = express.Router();


const NewBookModel= require("../models/newBookModel")
const NewBookController= require("../controllers/newBookController")
const AuthorModel= require("../models/authorModel")
const AuthorController= require("../controllers/authorController")




router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



// W5D2

router.post('/createnewbook',  NewBookController.createnewbook  );
router.post('/createauthor',  AuthorController.createauthor);
router.get('/findnewbook', NewBookController.findnewbook)
router.get('/changePrice', NewBookController.changePrice)
router.get('/givenbook', NewBookController.givenbook)

module.exports = router;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        