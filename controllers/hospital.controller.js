const { json } = require("sequelize");
const connectDB = require("../config/database");

/* Insert New Row */
 exports.createOneRequest = (req, res) => {
  let Id = req.body.id;
  let hospital_Name = req.body.hospital_name;
  let hospital_Type = req.body.hospital_type;
  let hospital_Address = req.body.hospital_address;
  let hospital_Tel = req.body.hospital_tel;
  let hospital_Email = req.body.hospital_email;

  console.log(json({
    Id:Id,
    hospital_Name: hospital_Name,
    hospital_Type: hospital_Type,
    hospital_Address: hospital_Address,
    hospital_Tel: hospital_Tel,
    hospital_Email: hospital_Email
  }))

  let data = [
    Id,
    hospital_Name,
    hospital_Type,
    hospital_Address,
    hospital_Tel,
    hospital_Email
  ]

  const sql = "INSERT INTO hospital VALUES (?, ?, ?, ?, ?, ?)";
  connectDB.query(sql, data, function (err, result) {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      if (result.length === 0) {
        res.status(404).json({
          message: "No results found",
        });
      } else {
        res.status(201).json({message:"Insert succeeded"});
      }
    }
  });
};

/* Select by Id */
exports.readOneRequest = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM hospital WHERE hospital_Id = ?";
  connectDB.query(sql, [id], function (err, result) {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      if (result.length === 0) {
        res.status(404).json({
          message: "No results found",
        });
      } else {
        res.status(302).json(result[0]);
      }
    }
  });
};

/* Update by Id */
exports.updateOneRequest = (req, res) => {
  let id = req.params.id;
  let namehospital = req.body.namehospital;
  let typehospital = req.body.typehospital;

  let data = [namehospital, typehospital, id];

  let sql =
    "UPDATE hospital SET " +
    "hospital_Name = ?, hospital_Type = ? WHERE hospital_Id = ?";
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

/* Delete by Id */
exports.deleteOneRequest = (req, res) => {
  let id = req.params.id;
  let sql = "DELETE FROM hospital WHERE hospital_Id = ?";

  connectDB.query(sql, [id], function (err, result) {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(202).json({ message: "Resource deleted!" });
    }
  });
};
