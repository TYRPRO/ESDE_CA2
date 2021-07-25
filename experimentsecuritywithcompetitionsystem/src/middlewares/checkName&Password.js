module.exports.validateNameAndPassword = (req, res, next) => {
    console.log("Validation for Name and Password Started:");

    let fullName = req.body.fullName;
    let password = req.body.password;


    if (fullName.length == 0 || password.length == 0 || password.length > 20){
        console.log("Validation Failed. Empty Input Found");
        let message = "Empty Input Found";
        res.status(400).json({ message: message });
        return
    }
    else if(!/\S/.test(fullName) || !/\S/.test(password)) {
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

module.exports.validatePassword = (req, res, next) => {
    console.log("Validation for Password Started:");

    let password = req.body.password;

    if(password == 0 || password.length > 20) {
        console.log("Validation Failed. Empty Input Found or Too Long");
        let message = "Empty Input Found or too long";
        res.status(400).json({ message: message });
        return;
    }
    else if(!/\S/.test(password)) {
        console.log("Validation Failed. Only Whitespace Characters found.");
        let message = "Only Whitespace Characters found";
        res.status(400).json({ message: message });
        return;
    }
    else {
        console.log("Validation Passed");
        next()
        return;
    }
}