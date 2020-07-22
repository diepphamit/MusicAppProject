const mongoose = require('mongoose');
const User = require('../models/user');

exports.users_get_all = (req, res, next) => {
    User.find()
        .select('_id email')
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