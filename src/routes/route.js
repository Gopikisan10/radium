const express = require('express');
const router = express.Router();


const MyBookController = require('../controllers/MyBookController')
const MyAuthorController = require('../controllers/MyAuthorController');
const MyAuthorModel = require('../models/MyAuthorModel');
const CommonMW = require('../Middleware/middleware')


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});





//ref and populate assignment
router.post('/pushbook', MyBookController.pushbook);
router.get('/myBooks', MyBookController.myBooks);
router.post('/pushauthor', MyAuthorController.pushauthor);
router.post('/createbook',MyBookController.createbook);
router.post('/publisher',MyBookController.publisher);




router.get('/basicRoute', CommonMW.mid1, MyBookController.basicroute);






module.exports = router;