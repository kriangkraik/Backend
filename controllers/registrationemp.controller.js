const connectDB = require("../config/database");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    const id = 0;
    const username = req.body.username;
    const password = await bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync()
    );

    /* Parameter User */
    const empFirstname = req.body.empFirstname;
    const empLastname = req.body.empLastname;
    const empAge = req.body.empAge;
    const empEmail = req.body.empEmail;
    const empPhone = req.body.empPhone;
    const empAddress = req.body.empAddress;
    const empGender = req.body.empGender;
    const authorize = "employee";
    const timestamp = new Date();




    let data = [id, username, password, authorize, timestamp];

    const sql = "INSERT INTO registration VALUES (?, ?, ?, ?, ?)";

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

                const sql2 = "INSERT INTO employee VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

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