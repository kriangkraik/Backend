const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/registrationemp.controller');

urlRoutes.post('/', controller.register);


module.exports = urlRoutes;