const connectDB = require('../config/database');

/* Create New Booking */
exports.createBooking = (req, res) => {
    let Timestamp = new Date();
    let Id = 0;
    let BookingDate = Timestamp;
    let EmpId = req.body.EmpId;
    let BookingStartdate = req.body.BookingStartdate;
    let BookingEnddate = req.body.BookingEnddate;
    let BookingDetail = req.body.BookingDetail;
    let HospitalId = req.body.HospitalId;
    let UserId = req.body.UserId;

    let data = [
        Id,
        BookingDate,
        EmpId,
        BookingStartdate,
        BookingEnddate,
        BookingDetail,
        HospitalId,
        UserId
    ]

    let sql = "INSERT INTO booking VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    connectDB.query(sql, data, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({
                    message: "No results found",
                });
            } else {
                res.status(201).json({ message: "Insert succeeded" });
            }
        }
    });
};

/* Select Booking By Id */
exports.readBookingById = (req, res) => {
    let id = req.params.id;
    let sql = 'SELECT * FROM booking WHERE booking_Id = ?';
    connectDB.query(sql, [id], function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json({
                result: result
            });
        }
    }
    )
};

/* Select All Booking */
exports.readAllBooking = (req, res) => {
    let sql = 'SELECT * FROM booking';
    connectDB.query(sql, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json({
                result: result
            });
        }
    }
    )
};

/* Update Booking By Id */
exports.updateBooking = (req, res) => {
    let Id = req.body.id;
    let BookingDate = req.body.BookingDate;
    let EmpId = req.body.EmpId;
    let BookingStartDate = req.body.BookingStartDate;
    let BookingEndDate = req.body.BookingEndDate;
    let BookingDetail = req.body.BookingDetail;
    let HospitalId = req.body.HospitalId;
    let UserId = req.body.UserId;

    let data = [
        Id,
        BookingDate,
        EmpId,
        BookingStartDate,
        BookingEndDate,
        BookingDetail,
        HospitalId,
        UserId,
    ];

    let sql =
        "UPDATE booking SET " +
        "booking_Date = ?, emp_id = ?, booking_Startdate = ?," +
        "booking_Enddate = ?, booking_Detail = ?, hospital_Id = ?, user_Id = ?" +
        "WHERE booking_Id = ?";
    connectDB.query(sql, data, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(301).json({
                message: "Resource updated!",
                result: result.affectedRows,
            });
        }
    });
};

/* Delete Booking By Id */
exports.deleteBooking = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM booking WHERE booking_Id = ?';
    connectDB.query(
        sql, [id], function (err, result) {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(202).json({ message: "Resource deleted!" });
            }
        }
    )
};