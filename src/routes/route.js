const express = require('express');
const router = express.Router();

const collegeController= require("../controllers/collegeController")
const internController= require("../controllers/internController")
const validator= require("../Middleware/collinternMiddleware")


router.post('/colleges', collegeController.createCollege)
router.post('/intern', validator.validateEmail,validator.validateNumber, internController.createIntern)
router.get('/getCollegeDetails', internController.getCollegeDetails)

module.exports = router;