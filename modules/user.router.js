const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const validation = require('./user.validation')


router.post('/signUp', validation.signUp, userController.signUpController);
router.post('/login', validation.login, userController.loginController);
router.get('/checkIn', validation.checkIn, userController.checkInController);


module.exports = router;
