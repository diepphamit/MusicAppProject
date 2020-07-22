const express = require('express');
const router = express.Router();
const UserSongController = require('../controller/user-song-controller');
const checkAuth = require('../middleware/check-auth')

router.get('/', UserSongController.getAllUserSongs);

module.exports = router;