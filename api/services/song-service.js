const mongoose = require('mongoose');
const Song = require('../models/song')

exports.getAllSongs = (req, res, next) => {
  Song.find()
        .select('_id songId')
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