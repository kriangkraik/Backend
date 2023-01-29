const connectDB = require("../config/database");

/* Create New User */
exports.createOneRequest = (req, res) => {
  let Id = req.body.id;
  let user_Firstname = req.body.user_Firstname;
  let user_Lastname = req.body.user_Lastname;
  let user_Email = req.body.user_Email;
  let user_Age = req.body.user_Age;
  let user_Phone1 = req.body.user_Phone1;
  let user_Phone2 = req.body.user_Phone2;
  let user_Symptom = req.body.user_Symptom;
  let reg_Id = req.body.reg_Id;

  let data = [
    Id,
    user_Firstname,
    user_Lastname,
    user_Email,
    user_Age,
    user_Phone1,
    user_Phone2,
    user_Symptom,
    reg_Id,
  ];

  const sql = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
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

/* Select All User */
exports.readAllRequest = (req, res) => {
  let sql = "SELECT * FROM user";
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

/* Select User By Key */
exports.readOneRequest = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM user WHERE user_Id = ?";
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

/* Edit User By Key */
exports.updateOneRequest = (req, res) => {
  let Id = req.body.id;
  let user_Firstname = req.body.user_Firstname;
  let user_Lastname = req.body.user_Lastname;
  let user_Email = req.body.user_Email;
  let user_Age = req.body.user_Age;
  let user_Phone1 = req.body.user_Phone1;
  let user_Phone2 = req.body.user_Phone2;
  let user_Symptom = req.body.user_Symptom;

  let data = [
    Id,
    user_Firstname,
    user_Lastname,
    user_Email,
    user_Age,
    user_Phone1,
    user_Phone2,
    user_Symptom,
  ];

  let sql =
    "UPDATE user SET " +
    "user_Firstname = ?, user_Lastname = ?, user_Email = ?,"+
    "user_Age = ?, user_Phone1 = ?, user_Phone2 = ?, user_Symptom = ?"+
    "WHERE user_Id = ?";
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

/* Delete User By Key */
exports.deleteOneRequest = (req, res) => {
  let id = req.params.id;
  let sql = "DELETE FROM user WHERE user_Id = ?";

  connectDB.query(sql, [id], function (err, result) {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(202).json({ message: "Resource deleted!" });
    }
  });
};