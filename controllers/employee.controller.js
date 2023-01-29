const connectDB = require('../config/database');

/* Create New Employee */
exports.createOneRequest = (req, res) => {
    let Id = 0;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let age = req.body.age;
    let email = req.body.email;
    let phoneno = req.body.phoneno;
    let address = req.body.address;
    let gender = req.body.gender;

    let data = [
        Id,
        firstname,
        lastname,
        age,
        email,
        phoneno,
        address,
        gender
    ]

    const sql = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
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
}

/* Select All Employee */
exports.readAllRequest = (req, res) => {
    let sql = "SELECT * FROM employee";
    connectDB.query(sql, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({
                    message: "No results found",
                });
            } else {
                res.status(302).json(result);
            }
        }
    });
};

/* Select Employee By Key */
exports.readOneRequest = (req, res) => {
    let id = req.params.id;
    let sql = 'SELECT * FROM employee WHERE emp_Id = ?';
    connectDB.query(
        sql, [id], function (err, result) {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(302).json({
                    result: result
                });
            }
        }
    )
}

/* Edit Employee By Key */
exports.updateOneRequest = (req, res) => {
    let Id = req.body.id;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let age = req.body.age;
    let email = req.body.email;
    let phoneno = req.body.phoneno;
    let address = req.body.address;
    let gender = req.body.gender;

    let data = [
        Id,
        firstname,
        lastname,
        age,
        email,
        phoneno,
        address,
        gender,
    ];
    let sql =
        "UPDATE employee SET " +
        "emp_Firstname = ?, emp_Lastname = ?, emp_Age = ?," +
        "emp_Email = ?, emp_Phone = ?, emp_Address = ?, emp_Gender = ?" +
        "WHERE emp_Id = ?";
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
}

/* Delete Employee By Key */
exports.deleteOneRequest = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM employee WHERE emp_Id = ?';
    connectDB.query(
        sql, [id], function (err, result) {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(202).json({ message: "Resource deleted!" });
            }
        }
    )
}