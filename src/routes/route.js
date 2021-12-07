const express = require('express');
const router = express.Router();

const collegeController= require("../controllers/collegeController")
const internController= require("../controllers/internController")
const validator= require("../Middleware/collinternMiddleware")


router.post('/colleges', validator.validUrl, collegeController.createCollege)
router.post('/intern', validator.validateEmail,validator.validateNumber, internController.createIntern)
router.get('/getCollegeDetails', collegeController.getCollegeDetails)

module.exports = router;