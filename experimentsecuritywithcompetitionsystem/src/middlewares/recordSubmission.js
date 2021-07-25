// Note this function is used in processLogin function in ../controllers/authController.js

config = require('../config/config');
const pool = require('../config/database');

module.exports.recordSubmissionAttempt = (userid) => {

    return new Promise(function (resolve, reject) {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return
            }
            else {
                sqlQuery = `INSERT INTO submission_attempt (fk_userid) VALUES (?)`
                connection.query(sqlQuery, [userid], (err, results) => {
                    if (err) {
                        // console.log(err);
                        reject(err);
                    }
                    else {
                        console.log("Submission Attempt Successfully Recorded");
                        resolve(results);
                    }
                    connection.release();
                    return;

                })
            }
        })
    })

}


module.exports.getSubmissionAttempts = (userid) => {

    return new Promise(function (resolve, reject) {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return
            }
            else {
                sqlQuery = `SELECT * FROM submission_attempt WHERE submission_timestamp >= CURRENT_TIMESTAMP - INTERVAL 30 SECOND AND fk_userid = ?`
                connection.query(sqlQuery, [userid], (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                    connection.release();
                    return;

                })
            }
        })
    })

}