const express = require('express');
const router = express.Router();
const SongController = require('../controller/song-controller');
const checkAuth = require('../middleware/check-auth')

router.get('/', SongController.getAllSongs);

module.exports = router;