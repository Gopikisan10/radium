const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");


const userController = require('../controllers/userController')
const loginController = require('../controllers/loginController')
const middleware = require('../middlewares/appMiddleware')


router.post('/createUser', userController.createUser);
router.get('/getUser', userController.getUser);

router.post('/logincreate',loginController.logincreate);
router.get('/getDetails/:userId',middleware.tokenchecker, loginController.getDetails);

router.put('/emailUpdate/:userId',middleware.tokenchecker, userController.emailUpdate);


// router.post('/createUser',  userController.createUser);
// router.post('/validate', loginController.validate);
// router.get('/users/:userId', Middleware.tokenchecker, userController.getDetails);
// router.put('/update/:userId',Middleware.tokenchecker,userController.update)


// const userController = require('../controllers/userController')
// const productController = require('../controllers/productController')
// const orderController = require('../controllers/orderController')
// const appMiddleware = require('../middlewares/appMiddleware')

// router.post('/users', appMiddleware.validateAppType, userController.createUser);
// router.post('/products', productController.createProduct);
// router.post('/orders', appMiddleware.validateAppType, orderController.createOrder);







module.exports = router;