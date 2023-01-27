const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

/* Create The Connection to Database */
const connectDB = mysql.createConnection({
  host: process.env.HOST_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.NAME_DATABASE
});

/* Check Connection */
connectDB.connect(function (error) {
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected Database Success');
  }
})

module.exports = connectDB;