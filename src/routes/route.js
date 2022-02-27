const express = require('express');

const router = express.Router();
const customerController = require("../controller/customerController")
const cardController = require("../controller/cardController")
const middleware = require("../middleware/login")
const middleware1 = require("../middleware/authentitication")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Middleware.Auth
router.post('/customer', customerController.newCustomer);
router.post('/login', middleware.login);
router.get('/getCustomer/:status',middleware1.Auth, customerController.getCustomer);
router.put('/updateCustomer/:_id',middleware1.Auth, customerController.updateCustomer);
router.delete('/deleteCustomer/:_id',middleware1.Auth, customerController.deleteCustomer);

router.post('/createCard',middleware1.Auth, cardController.createCard);
router.get('/cardDetail/:customerID', middleware1.Auth, cardController.getCardList);

module.exports = router;