const connectDB = require("../config/database");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    const id = 0;
    const username = req.body.username;
    const password = await bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync()
    );
    const authorize = req.body.authorize;
    const timestamp = new Date();

    let data = [id, username, password, authorize, timestamp];

    const sql = "INSERT INTO registration VALUES (?, ?, ?, ?, ?)";
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
