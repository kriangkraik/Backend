const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

/* Create The Connection to Database */
const connectDB = mysql.createConnection({
  // Connection Pool Limit 10
  connectionLimit: 10,
  host: process.env.HOST_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.NAME_DATABASE,
});

/* Check Connection */
connectDB.connect(function (error) {
  if (!!error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    } else if (error.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    } else if (error.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    } else {
      console.error(error.code);
    }
  } else {
    console.log("Connected Database Success");
  }
});

module.exports = connectDB;