const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/registration.controller');

urlRoutes.post('/', controller.register);


module.exports = urlRoutes;