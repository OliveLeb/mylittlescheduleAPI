'use strict';

const express = require('express');
const validateUserLogin = require('../schema/users').validateUserLogin;
const validateUserRegister = require('../schema/users').validateUserRegister;
const verifyCredentials = require('../utils/users').verifyCredentials;
const verifyUniqueEmail = require('../utils/users').verifyUniqueEmail;
const AuthController = require('../controllers/Auth.Controller');
const verif = require('../middleware/authorization');

const router = express.Router();

router.post('/register',[validateUserRegister,verifyUniqueEmail],AuthController.register);

router.post('/login',[validateUserLogin,verifyCredentials],AuthController.login);

router.post('/refresh-token',verif.refreshToken,AuthController.refreshToken);

module.exports = router;