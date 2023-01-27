const connectDB  = require('../config/database');

exports.createOneRequest = (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let age =   req.body.age;
    let email = req.body.email;
    let phoneno = req.body.phoneno;
    let address = req.body.address;
    let gender  = req.body.gender;
    let username = req.body.username;
    let password = req.body.password;

    let sql1 = "INSERT INTO employee (emp_Id, emp_Firstname, emp_Lastname, emp_Age, emp_Email, emp_Phone, emp_Address, emp_Gender, reg_Id) VALUES ?";

    console.log(json({
        firstname : firstname,
        lastname : lastname,
        age : age,
        email : email,
        phoneno : phoneno,
        address : address,
        gender  : gender,
        username : username,
        password : password
    }));

    res.status(201).json({message: "New resource created!"});
}

exports.readOneRequest = (req, res) => {
    let id = req.params.id;
    let sql = 'SELECT * FROM employee WHERE emp_Id = ?';
    connectDB.query(
        sql,[id], function(err, result){
            if(err){
                res.status(500).json({message: err.message});
            } else {
                res.status(302).json({
                    result: result
                });
            }
        }
    )
}

exports.updateOneRequest = (req, res) => {
    res.status(301).json({message: "Resource updated!"});
}

exports.deleteOneRequest = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM employee WHERE emp_Id = ?';
    connectDB.query(
        sql,[id], function(err, result){
            if(err){
                res.status(500).json({message: err.message});
            } else {
                res.status(202).json({message: "Resource deleted!"});
            }
        }
    ) 
}