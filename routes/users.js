'use strict';

const express = require('express');
const verify  = require('../middleware/authorization');
const UserController = require('../controllers/User.Controller');

const router = express.Router();

router.use(verify.token);

router.get('/', verify.scope, UserController.getAllUser);

router.get('/loggedUser', UserController.getLoggedUser);

router.put('/loggedUser/:id', UserController.updateUser);

module.exports = router;