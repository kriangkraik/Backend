const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/booking.controller');

urlRoutes.post('/', controller.createBooking);
urlRoutes.get('/:id', controller.readBookingById);
urlRoutes.get('/', controller.readAllBooking);
urlRoutes.put('/:id', controller.updateBooking);
urlRoutes.delete('/:id', controller.deleteBooking);

module.exports = urlRoutes;