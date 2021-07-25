config = require("../config/config");
const pool = require("../config/database");
const jwt = require("jsonwebtoken");

module.exports.validateOwner = (req, res, next) => {
  console.log("Running validation of design owner to execute updates...");
  var fileId = req.body.fileId;
  var created_by_id;
  console.log("fileid: " + fileId);

  if (fileId != null) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        let message = "Database connection error";
        return res.status(400).json({ message: message });
      } else {
        connection.query(
          `SELECT created_by_id FROM file WHERE file_id= ?`,
          [fileId],
          (err, rows) => {
            connection.release();
            if (err) {
              let message =  "SQL query error";
              return res.status(400).json({ message: message });
            } else {
              try{
                created_by_id = rows[0].created_by_id;
                console.log("created_by_id: " + created_by_id);
                }
                catch(error){
                    console.log("Error while reading created_by_id: " + error);
                }
              if (typeof req.headers.authorization !== "undefined") {
                let token = req.headers.authorization.split(" ")[1];
                jwt.verify(token, config.JWTKey, (err, data) => {
                  console.log("data extracted from token \n", data);
                  if (err) {
                    console.log(err);
                    let message = "Unauthorized access";
                    return res
                      .status(403)
                      .send({ message: message });
                  } else {
                    if (data.id != created_by_id) {
                      let message = "Unauthorized access"
                      return res
                        .status(403)
                        .send({ message: message });
                    } else {
                      next();
                    }
                  }
                });
              } else {
                let message = "Unauthorized access"
                res.status(403).send({ message: message });
              }
            }
          }
        );
      }
    });
  } else {
    let message = "Invalid Request"
    return res.status(400).json({ message: message });
  }
};

module.exports.restrictView = (req, res, next) => {
  console.log("Running validation of design owner to view update page...");
  var fileId = req.params.fileId;
  var created_by_id;
  console.log("fileid: " + fileId);

  if (fileId != null) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        let message = "Database connection error";
        return res.status(400).json({ message: message });
      } else {
        connection.query(
          `SELECT created_by_id FROM file WHERE file_id= ?`,
          [fileId],
          (err, rows) => {
            connection.release();
            if (err) {
              let message = "SQL query error"
              return res.status(400).json({ message: message });
            } else {
              try{
              created_by_id = rows[0].created_by_id;
              console.log("created_by_id: " + created_by_id);
              }
              catch(error){
                  console.log("Error while reading created_by_id: " + error);
              }

              if (typeof req.headers.authorization !== "undefined") {
                let token = req.headers.authorization.split(" ")[1];
                jwt.verify(token, config.JWTKey, (err, data) => {
                  console.log("data extracted from token \n", data);
                  if (err) {
                    console.log(err);
                    let message = "Unauthorized access";
                    return res
                      .status(403)
                      .send({ message: message });
                  } else {
                    if (data.id != created_by_id) {
                      let message = "Unauthorized access";
                      return res
                        .status(403)
                        .send({ message: message });
                    } else {
                      next();
                    }
                  }
                });
              } else {
                let message = "Unauthorized access";
                res.status(403).send({ message: message });
              }
            }
          }
        );
      }
    });
  } else {
    let message = "Invalid Request";
    return res.status(400).json({ message: message });
  }
};
