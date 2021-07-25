const config = require("../config/config");
const jwt = require("jsonwebtoken");
var express = require("express");
var app = express();

module.exports.checkForAdminRole = (req, res, next) => {
  //If the token is valid, the logic extracts the user id and the role information.
  //If the role is not user, then response 403 UnAuthorized
  //The user id information is inserted into the request.body.userId
  console.log("http header - is it this one ", req.headers["user"]);
  if (typeof req.headers.authorization !== "undefined") {
    // Retrieve the authorization header and parse out the
    // JWT using the split function
    let token = req.headers.authorization.split(" ")[1];
    //console.log('Check for received token from frontend : \n');
    //console.log(token);
    jwt.verify(token, config.JWTKey, (err, data) => {
      console.log("data extracted from token \n", data);
      if (err) {
        console.log(err);
        let message = "Unauthorized access";
        return res.status(403).send({ message: message });
      } else {
        if (data.role != "admin") {
          let message = "Unauthorized access";
          return res.status(403).send({ message: message });
        } else {
          next();
        }
      }
    });
  } else {
    let message = "Unauthorized access";
    res.status(403).send({ message: message });
  }
}; //End of checkForValidUserRoleUser
module.exports.checkForValidUserId = (req, res, next) => {
  //If the token is valid, the logic extracts the user id and the role information.
  //If the role is not user, then response 403 UnAuthorized
  //The user id information is inserted into the request.body.userId
  var userId = req.headers.user;
  console.log("req headers: "+req.headers);
  console.log("http header - user ", req.headers["user"]);
  if (typeof req.headers.authorization !== "undefined") {
    // Retrieve the authorization header and parse out the
    // JWT using the split function
    let token = req.headers.authorization.split(" ")[1];
    //console.log('Check for received token from frontend : \n');
    //console.log(token);
    jwt.verify(token, config.JWTKey, (err, data) => {
      console.log("data extracted from token \n", data);
      if (err) {
        console.log(err);
        return res.status(403).send({ message: "Unauthorized access 1" });
      } else {
        if (data.id != userId){
            return res.status(403).send({ message: "Unauthorized access 2" });
        }
        else{
            next();
        }
      }
    });
  } else {
    res.status(403).send({ message: "Unauthorized access" });
  }
}; //End of checkForValidUserId

module.exports.returnUserRole = (req,res,next) => {
  console.log("http header - skmflksmlksdmflkdsm ", req.headers["user"]);
  if (typeof req.headers.authorization !== "undefined") {
    // Retrieve the authorization header and parse out the
    // JWT using the split function
    let token = req.headers.authorization.split(" ")[1];
    //console.log('Check for received token from frontend : \n');
    //console.log(token);
    jwt.verify(token, config.JWTKey, (err, data) => {
      console.log("data extracted from token \n", data);
      if (err) {
        console.log(err);
        let message = "Unauthorized access";
        return res.status(403).send({ message: message });
      } else {
        return res.status(200).send({"role":data.role});
      }
    });
  } else {
    let message = "Unauthorized access";
    res.status(403).send({ message: message });
  }
}