const connectDB = require("../config/database");
const bcrypt = require("bcrypt");

/* Function registerUser */
exports.registerUser = async (req, res) => {
    let id = 0;
    let username = req.body.username;
    let password = await bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync()
    );
    
    /* Parameter User */
    let userFirstname = req.body.userFirstname;
    let userLastname = req.body.userLastname;
    let userAge = req.body.userAge;
    let userEmail = req.body.userEmail;
    let userPhone1 = req.body.userPhone1;
    let userPhone2 = req.body.userPhone2;
    let userAddress = req.body.userAddress;
    let userGender = req.body.userGender;
    let userSymptom = req.body.userSympt;
    let authorize = "user";
    let timestamp = new Date();

    /* Parameter Register */
    let data = [id, username, password, authorize, timestamp];

    let sql = "INSERT INTO registration VALUES (?, ?, ?, ?, ?)";

    /* Query Insert To Registration Table */
    connectDB.query(sql, data, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({
                    message: "No results found",
                });
            } else {
                let register_id = result.insertId;

                let DataUser = [
                    id,
                    userFirstname,
                    userLastname,
                    userEmail,
                    userAge,
                    userPhone1,
                    userPhone2,
                    userSymptom,
                    register_id,
                    userGender,
                    userAddress
                ];

                let sql2 = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

                /* Query Insert To User Table */
                connectDB.query(sql2, DataUser, function (err, result) {
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
        }
    });
};

/* Function registerEmployee */
exports.registerEmployee = async (req, res) => {
    let id = 0;
    let username = req.body.username;
    let password = await bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync()
    );

    /* Parameter Employee */
    let empFirstname = req.body.empFirstname;
    let empLastname = req.body.empLastname;
    let empAge = req.body.empAge;
    let empEmail = req.body.empEmail;
    let empPhone = req.body.empPhone;
    let empAddress = req.body.empAddress;
    let empGender = req.body.empGender;
    let authorize = "employee";
    let timestamp = new Date();

    /* Parameter Register */
    let data = [id, username, password, authorize, timestamp];

    let sql = "INSERT INTO registration VALUES (?, ?, ?, ?, ?)";

    /* Query Insert To Registration Table */
    connectDB.query(sql, data, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({
                    message: "No results found",
                });
            } else {
                let register_id = result.insertId;

                let DataEmployee = [
                    id,
                    empFirstname,
                    empLastname,
                    empAge,
                    empEmail,
                    empPhone,
                    empAddress,
                    empGender,
                    register_id
                ];

                let sql2 = "INSERT INTO employee VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

                /* Query Insert To Employee Table */
                connectDB.query(sql2, DataEmployee, function (err, result) {
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
        }
    });
};