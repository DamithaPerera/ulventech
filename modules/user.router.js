const express = require('express');
const router = express.Router();
const userController = require('./user.controller');


router.post('/signUp', userController.signUpController);
router.post('/login', userController.loginController);


module.exports = router;
