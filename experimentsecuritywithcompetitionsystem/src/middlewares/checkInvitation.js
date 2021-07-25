const validator = require('validator');

module.exports.checkvalidInvitation = (req, res, next) => {
    console.log("Check for Valid Invitation Started");
    let recipientEmail = req.body.recipientEmail;
    let recipientName = req.body.recipientName;


    if(!validator.isEmail(recipientEmail, {blacklisted_chars: '\'-'})) {
        console.log("Validation Failed. Invalid Email found.");
        let message = "Invalid Email";
        res.status(400).json({ message: message});
        return;
    }
    if(recipientName.length == 0) {
        console.log("Validation Failed. No Name found.");
        let message = "No inputted name";
        res.status(400).json({ message: message});
        return;
    }
    if(!/\S/.test(recipientName)) {
        console.log("Validation Failed. Only Whitespace Characters found.");
        let message = "Only Whitespace Characters found"
        res.status(400).json({ message: message })
        return;
    }
    next();
}