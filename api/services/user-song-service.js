const mongoose = require('mongoose');
const UserSong = require('../models/user-song')

exports.getAllUserSongs = (req, res, next) => {
  UserSong.find()
        .select('_id userId songId')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        })
}