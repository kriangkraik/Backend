const connectDB = require("../config/database");

exports.createOneRequest = (req, res) => {
  let hospital_name = req.body.hospital_name;
  const sql =
    "INSERT INTO hospital (hospital_name) VALUES (" + hospital_name + ")";
  connectDB.query(sql, function (err, result) {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json({ message: "New resource created!"+ result });
    }
  });
};

exports.readOneRequest = (req, res) => {
  res.status(302).json({ message: "Resource found!" });
};

exports.updateOneRequest = (req, res) => {
  res.status(301).json({ message: "Resource updated!" });
};

exports.deleteOneRequest = (req, res) => {
  res.status(202).json({ message: "Resource deleted!" });
};
