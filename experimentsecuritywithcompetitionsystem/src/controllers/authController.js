const user = require("../services/userService");
const auth = require("../services/authService");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const logAttempts = require("../middlewares/recordLogin");

exports.processLogin = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  try {
    var auth_Results = await auth.authenticate(email);
    await logAttempts.recordLoginAttempt(auth_Results[0].user_id);

    var userLoginAttempts = await logAttempts.getRecentLoginAttempts(
      auth_Results[0].user_id
    );
    if (userLoginAttempts.length >= 10) {
      throw "Too many attempts. Try to login again in 10 minutes";
      // Throw above ends try and goes to catch.
    }

    if (auth_Results.length == 1) {
      if (password == null || auth_Results[0] == null) {
        throw "Invalid Credentials";
      }

      // note we are using asynchronous version of bcrypt.compare

      if (!bcrypt.compareSync(password, auth_Results[0].user_password)) {
        throw "Invalid Credentials";
      } else {
        let data = {
          user_id: auth_Results[0].user_id,
          role_name: auth_Results[0].role_name,
          token: jwt.sign(
            { id: auth_Results[0].user_id, role: auth_Results[0].role_name },
            config.JWTKey,
            {
              expiresIn: 86400, //Expires in 24 hrs
            }
          ),
        };
        return res.status(200).json(data);
      }
    }
  } catch (error) {
    if (error == "Too many attempts. Try to login again in 10 minutes") {
      let message = "Too many attempts. Try again in 10 minutes";
      res
        .status(429)
        .json({ message: message });
      return;
    } else if (error == "Login has failed") {
      // above only happens in auth.authenticate();
      let message = "Invalid Credentials";
      return res.status(401).json({ message: message});
    } else {
      console.log(error);
      let message = "Login has failed";
      return res.status(500).json({ message: message });
    }
  }
  // try {
  //     auth.authenticate(email, function (error, results) {
  //         if (error) {
  //             let message = 'Credentials are not valid.';
  //             //return res.status(500).json({ message: message });
  //             //If the following statement replaces the above statement
  //             //to return a JSON response to the client, the SQLMap or
  //             //any attacker (who relies on the error) will be very happy
  //             //because they relies a lot on SQL error for designing how to do
  //             //attack and anticipate how much "rewards" after the effort.
  //             //Rewards such as sabotage (seriously damage the data in database),
  //             //data theft (grab and sell).
  //             return res.status(500).json({ message: error });

  //         } else {
  //             logAttempts.recordLoginAttempt(results[0].user_id, function (err) {
  //                 if (err) {
  //                     return res.status(500).json({ message: 'Recording of login failed.' });
  //                 }
  //                 else {
  //                     logAttempts.getRecentLoginAttempts(results[0].user_id, function (error1, attemptsResult) {
  //                         if (error1) {
  //                             return res.status(500).json({ message: 'Could not get user attempts' })
  //                         }
  //                         else {
  //                             if (attemptsResult.length >= 10) {
  //                                 console.log("A user, " + results[0].fullname + ", tried to login too many times.");
  //                                 return res.status(429).json({ message: "Too many login attempts"})
  //                             }
  //                             else {
  //                                 if (results.length == 1) {
  //                                     if ((password == null) || (results[0] == null)) {
  //                                         return res.status(500).json({ message: 'login failed' });
  //                                     }
  //                                     if (bcrypt.compareSync(password, results[0].user_password) == true) {

  //                                         let data = {
  //                                             user_id: results[0].user_id,
  //                                             role_name: results[0].role_name,
  //                                             token: jwt.sign({ id: results[0].user_id, role: results[0].role_name }, config.JWTKey, {
  //                                                 expiresIn: 86400 //Expires in 24 hrs
  //                                             })
  //                                         }; //End of data variable setup

  //                                         return res.status(200).json(data);
  //                                     } else {
  //                                         // return res.status(500).json({ message: 'Login has failed.' });
  //                                         return res.status(500).json({ message: "Credentials are not valid" });
  //                                     } //End of passowrd comparison with the retrieved decoded password.
  //                                 } //End of checking if there are returned SQL results
  //                             }
  //                         }
  //                     })
  //                 }
  //             })
  //         }
  //     })
  // }
  // catch (error) {
  //     if(error == "Login has failed") {
  //         return res.status(401).json({ message: "Invalid Credentials"});
  //     }
  //     return res.status(500).json({ message: "Login has failed" });
  // } //end of try
};

exports.processRegister = (req, res, next) => {
  console.log("processRegister running.");
  let fullName = req.body.fullName;
  let email = req.body.email;
  let password = req.body.password;

  bcrypt.hash(password, 10, async (err, hash) => {
    try {
      if (err) {
        console.log("Error on hashing password");
        throw "Error on hashing password.";
      } else {
        // Function below is a promise that will be caught be 'catch()' below.
        var results = await user.createUser(fullName, email, hash);

        if (results != null) {
          console.log(results);
          let message = "Completed registration.";
          return res.status(200).json({ message: message });
        }
        //End of anonymous callback function
      }
    } catch (error) {
      console.log(error.errno == 1062);
      if (error == "Error on hashing password.") {
        let message = "Error on hashing password.";
        return res.status(500).json({ message: message });
      }
      if (error.errno == 1062) {
        let message = "Duplicate Email. Please choose a new one.";
        return res
          .status(409)
          .json({ message: message });
      }
      let message = "Unable to complete registration";
      return res
        .status(500)
        .json({ message: message });
    }
  });
}; // End of processRegister
