const mongoose = require('mongoose');
const User = require('../models/user');
const AuthService = require('../services/user-service')

exports.loginController = (req, res, next) => {
  return AuthService.loginService(req, res, next)
}

exports.signupController = (req, res, next) => {
    return AuthService.signupService(req, res, next)
  }