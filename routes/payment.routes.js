const express = require('express');
const urlRoutes = express.Router();
const multer = require('multer');
const path = require('path');

const controller = require('../controllers/payment.controller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'picture')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });
/* Payment */
urlRoutes.get('/', (req, res) => { res.render("pages/Payment"); });

/* Add Recipt */
urlRoutes.post('/addrecipt', upload.single('image'), controller.addpayment);


module.exports = urlRoutes;