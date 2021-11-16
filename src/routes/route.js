const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const BookModel= require("../models/BookModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/BookController")

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

module.exports = router;