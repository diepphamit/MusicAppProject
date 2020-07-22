const express = require('express');
const router = express.Router();
const AuthController = require('../controller/auth-controller');

router.post('/signup', AuthController.signupController);
router.post('/login', AuthController.loginController);

module.exports = router;