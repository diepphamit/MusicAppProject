const mongoose = require('mongoose');

const userSongSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    songId: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Song'},
    userId: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'},
});

module.exports = mongoose.model('UserSong', userSongSchema);