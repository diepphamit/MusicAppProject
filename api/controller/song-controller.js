const mongoose = require('mongoose');
const SongService = require('../services/song-service');

exports.getAllSongs = (req, res, next) => {
    return SongService.getAllSongs(req, res, next);
}