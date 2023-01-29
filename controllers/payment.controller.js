const connectDB  = require('../config/database');

exports.addpayment = (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let tel = req.body.tel
    let billnumber = req.body.billnumber
    let transferdate = req.body.transferdate
    let price = req.body.price

    let data = [
        name, email, tel, billnumber, transferdate, price
    ];


    res.status(201).json({ message: "ImageUpload Complete" });
};

