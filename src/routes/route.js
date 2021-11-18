const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel")
// const BookModel= require("../models/BookModel")
// //===========================================================
// const Newbook= require("../models/NewbookModel.js")
// const Author= require("../models/AuthorModel.js")

// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/BookController")
//============================================================
const Newbooks= require("../models/MybookModel.js")
const Authors= require("../models/MyauthorModel.js")
// const authorbookController= require("../controllers/AuthorbookController")
const MyauthbookController= require("../controllers/myauthbookController.js")
////========================18-11-2021========assignment 2=======

const MYBook= require("../models/mybook1Model.js")
const MYAuthor= require("../models/myauthorMODEL1.js")
const mypublisher= require("../models/mybook1Model.js")

const pabController= require("../controllers/PubauthbookController.js")

// router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
// });

// router.post('/createBook',  UserController.createBook  );
// router.get('/getAllBook',  UserController.getBookData  );
// //================================================================
// router.post('/createbookcoll',  BookController.createbookcoll  );
// router.get('/getallBookcoll',  BookController.getbookDatacoll  );

// router.post('/getBooksInYear',  BookController.getBooksInYear  );
// router.post('/getParticularBooks',  BookController.getParticularBooks  );

// router.get('/getXINRBooks',  BookController.getXINRBooks  );
// router.get('/getRandomBooks',  BookController.getRandomBooks  );
// //=====================Author&&Book===========================================

// router.post('/addbooktodb',  authorbookController.addbooktodb  );
// router.post('/addauthordb',  authorbookController.addauthordb  );
// router.post('/findbookwthauthor',  authorbookController.findbookwthauthor  );
// router.post('/findauthorname',  authorbookController.findauthorname  );
// router.get('/findbook',  authorbookController.findbook  );
//================================xx==================xx===18-11-2021=======populate=====

router.post('/CReateBook',  MyauthbookController.CReateBook );
router.post('/createAuthor',  MyauthbookController.createAuthor  );
router.get('/check123',  MyauthbookController.check123  );
//========================18-11-2021==========assignmrnt 2==========================

router.post('/createmyBook',  pabController.createmyBook );
router.post('/createmyauthor',  pabController.createmyauthor );
router.post('/createpublisher',  pabController.createpublisher  );
router.get('/getBooK',  pabController.getBooK  );


module.exports = router;