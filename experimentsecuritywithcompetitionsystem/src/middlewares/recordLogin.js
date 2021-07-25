// Note this function is used in processLogin function in ../controllers/authController.js

config = require('../config/config');
const pool = require('../config/database');

module.exports.recordLoginAttempt = (userid) => {

    return new Promise(function (resolve, reject) {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            else {
                sqlQuery = `INSERT INTO login_attempt (fk_userid) VALUES (?)`
                connection.query(sqlQuery, [userid], (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        console.log("Login Attempt Successfully Recorded");
                        resolve();
                    }
                    connection.release();
                    return;
                })
            }
        }
        )
    })

}

module.exports.getRecentLoginAttempts = (userid) => {

    return new Promise(function (resolve, reject) {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            else {
                sqlQuery = `SELECT * FROM login_attempt WHERE attempt_timestamp >= CURRENT_TIMESTAMP - INTERVAL 10 MINUTE AND fk_userid = ?`
                connection.query(sqlQuery, [userid], (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                    connection.release();
                    return
                })
            }
        })
    })

}
