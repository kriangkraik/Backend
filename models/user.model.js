// import connection
import db from "../config/database.js";

// Get All Users
export const getUsers = (result) => {
    db.query("SELECT * FROM user", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}