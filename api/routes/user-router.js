const express = require('express');
const router = express.Router();
const UserController = require('../controller/user-controller');
const checkAuth = require('../middleware/check-auth')

router.get('/',checkAuth, UserController.users_get_all);

module.exports = router;