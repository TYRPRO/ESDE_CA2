const validator = require('validator');

module.exports.validateEmail = (req, res, next) => {
    searchedEmail = req.body.email;

    if (validator.isEmail(searchedEmail, {blacklisted_chars: '\'-'})) {
        // Note the extra blacklisted_chars on top.
        // the isEmail() automatically blacklists these ";<> characters automatically.
        next()
        return;
    }
    else {
        let message = "Invalid Email";
        res.status(400).json({ message: message});
        return
    }

}