const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const BookModel= require("../models/BookModel")
//===========================================================
const Newbook= require("../models/NewbookModel.js")
const Author= require("../models/AuthorModel.js")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/BookController")
//============================================================
const authorbookController= require("../controllers/AuthorbookController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook',  UserController.createBook  );
router.get('/getAllBook',  UserController.getBookData  );
//================================================================
router.post('/createbookcoll',  BookController.createbookcoll  );
router.get('/getallBookcoll',  BookController.getbookDatacoll  );

router.post('/getBooksInYear',  BookController.getBooksInYear  );
router.post('/getParticularBooks',  BookController.getParticularBooks  );

router.get('/getXINRBooks',  BookController.getXINRBooks  );
router.get('/getRandomBooks',  BookController.getRandomBooks  );
//=====================Author&&Book===========================================

router.post('/addbooktodb',  authorbookController.addbooktodb  );
router.post('/addauthordb',  authorbookController.addauthordb  );
router.post('/findbookwthauthor',  authorbookController.findbookwthauthor  );
router.post('/findauthorname',  authorbookController.findauthorname  );
router.get('/findbook',  authorbookController.findbook  );
module.exports = router;