const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")

router.get("/getcrypto", cryptoController.getcrypto)

router.post("/cowin/getOtp", cryptoController.getOtp)


module.exports = router;