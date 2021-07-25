const validator = require('validator');

module.exports.validateTextInputs = (req, res, next) => {
    console.log("Validation for Title and Description Started:");
    submissionTitle = req.body.designTitle;
    submissionDescription = req.body.designDescription;
    var blacklistedCharacters = /['";<>\/\-]/;

    if (blacklistedCharacters.test(submissionTitle) ||  blacklistedCharacters.test(submissionDescription)) {
        console.log("Validation Failed. Illegal Characters found.");
        let message = "Title or Description contains illegal characters";
        res.status(400).json({ message: message });
        return;
    }
    else if (submissionTitle.length == 0 ||  submissionDescription.length == 0){
        console.log("Validation Failed. Empty Input Found");
        let message = "Empty Input Found";
        res.status(400).json({ message: message });
        return
    }
    else if(!/\S/.test(submissionTitle) || !/\S/.test(submissionDescription)) {
        console.log("Validation Failed. Only Whitespace Characters found.")
        let message = "Only Whitespace Characters found";
        res.status(400).json({ message: message });
        return
    }
    else {
        console.log("Validation Passed");
        next()
        return
    }


}