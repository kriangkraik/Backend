const connectDB  = require('../config/database');

exports.createOneRequest = (req, res) => {
    res.status(201).json({message: "New resource created!"});
}

exports.readOneRequest = (req, res) => {
    let id = req.body.id;
    let sql = 'SELECT * FROM booking WHERE booking_Id = ?';
    connectDB.query(sql,[id], function(err, result){
            if(err){
                res.status(500).json({message: err.message});
            }else{
                res.status(200).json({
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
    res.status(202).json({message: "Resource deleted!"});
}