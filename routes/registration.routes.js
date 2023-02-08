const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/registration.controller');

urlRoutes.post('/employee', controller.registerEmployee);
urlRoutes.post('/user', controller.registerUser);

module.exports = urlRoutes;