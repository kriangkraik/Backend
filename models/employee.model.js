// import connection
const db = require('../config/database.js');

// Get All Employees
const getEmployees = (result) => {
    db.query("SELECT * FROM employee", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Employee
async function getEmployeeById(id, result){
    await db.query("SELECT * FROM employee WHERE emp_id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}


// Insert Employee to Database
const insertEmployee = (data, result) => {
    db.query("INSERT INTO employee SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Employee to Database
const updateEmployeeById = (data, id, result) => {
    db.query("UPDATE employee SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Employee to Database
const deleteEmployeeById = (id, result) => {
    db.query("DELETE FROM employee WHERE employee_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}