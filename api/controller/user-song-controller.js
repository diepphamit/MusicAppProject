const mongoose = require('mongoose');
const UserSongService = require('../services/user-song-service');

exports.getAllUserSongs = (req, res, next) => {
    return UserSongService.getAllUserSongs(req, res, next);
}