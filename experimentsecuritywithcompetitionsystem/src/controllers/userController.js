const userManager = require('../services/userService');
const fileDataManager = require('../services/fileService');
const config = require('../config/config');
const validator = require('validator');
const recordSubmission = require('../middlewares/recordSubmission')

// 
exports.processDesignSubmission = async (req, res, next) => {
    let designTitle = req.body.designTitle;
    let designDescription = req.body.designDescription;
    let userId = req.headers.user;
    let file = req.body.file;
    try {
        await recordSubmission.recordSubmissionAttempt(userId);

        var userSubmissionAttempts = await recordSubmission.getSubmissionAttempts(userId);
        if (userSubmissionAttempts.length > 1) {
            console.log("User " + userId + " tried to submit more than one design in 30 seconds.");
            throw 'Too many attempts. Try again in 30 Seconds';
        }

        fileDataManager.uploadFile(file, async function (error, result) {
            try {
                console.log('check result variable in fileDataManager.upload code block\n', result);
                console.log('check error variable in fileDataManager.upload code block\n', error);
                let uploadResult = result;
                if (error) {
                    throw 'Unable to complete file submission.';

                } else {
                    //Update the file table inside the MySQL when the file image
                    //has been saved at the cloud storage (Cloudinary)
                    let imageURL = uploadResult.imageURL;
                    let publicId = uploadResult.publicId;
                    console.log('check uploadResult before calling createFileData in try block', uploadResult);
                    let result = await fileDataManager.createFileData(imageURL, publicId, userId, designTitle, designDescription);
                    console.log('Inspert result variable inside fileDataManager.uploadFile code');
                    console.log(result);
                    if (result) {
                        let message = 'File submission completed.';
                        res.status(200).json({ message: message, imageURL: imageURL });
                    }
                }
            } catch (error){
                let message = "File Submission Failed"
                // Generic Error Message
                res.status(500).json({message: message});
            }
        })
    }
    catch (error) {
        if (error == "Too many attempts. Try again in 30 Seconds") {
            let message = "Too many attempts. Try again in 30 Seconds";
            res.status(429).json({
                message: message
            });
        }
        else {
            let message = 'File submission failed.';
            // Generic Error Message
            res.status(500).json({ message: message })
        }

    }

}; //End of processDesignSubmission

exports.processGetSubmissionData = async(req, res, next) => {
    let pageNumber = req.params.pagenumber;
    let search = req.params.search;
    let userId = req.headers.user;
    console.log("user id after token check: " + userId);
    try {
        let results = await fileDataManager.getFileData(userId, pageNumber, search);
        console.log('Inspect result variable inside processGetSubmissionData code\n', results);
        if (results) {
            var jsonResult = {
                'number_of_records': results[0].length,
                'page_number': pageNumber,
                'filedata': results[0],
                'total_number_of_records': results[2][0].total_records
            }
            return res.status(200).json(jsonResult);
        }
    } catch (error) {
        let message = 'Server is unable to process your request.';
        return res.status(500).json({
            message: message
        });
    }

}; //End of processGetSubmissionData
exports.processGetSubmissionsbyEmail = async(req, res, next) => {
    let pageNumber = req.params.pagenumber;
    let search = req.params.search;
    try {
        //Need to search and get the id information from the database
        //first. The getOneuserData method accepts the userId to do the search.
        let userData = await userManager.getOneUserDataByEmail(search);
        console.log('Results in userData after calling getOneUserDataByEmail');
        console.log(userData);
        if (userData){       
        let results = await fileDataManager.getFileDataByUserId(userData[0].user_id, pageNumber);
        console.log('Inspect result variable inside processGetSubmissionsbyEmail code\n', results);
        if (results) {
            //Changes here to protect against XSS Attacks
            for(var i = 0; i < results[0].length;i++) {
                results[0][i].design_title = validator.escape(results[0][i].design_title);
                results[0][i].design_description = validator.escape(results[0][i].design_description);
            }
            var jsonResult = {
                'number_of_records': results[0].length,
                'page_number': pageNumber,
                'filedata': results[0],
                'total_number_of_records': results[2][0].total_records
            }
            return res.status(200).json(jsonResult);
        }//Check if there is any submission record found inside the file table
    }//Check if there is any matching user record after searching by email
    } catch (error) {
        let message = 'Server is unable to process your request.';
        return res.status(500).json({
            message: message
        });
    }

}; //End of processGetSubmissionsbyEmail

exports.processGetUserData = async(req, res, next) => {
    let pageNumber = req.params.pagenumber;
    let search = req.params.search;

    try {
        let results = await userManager.getUserData(pageNumber, search);
        console.log('Inspect result variable inside processGetUserData code\n', results);
        if (results) {
            var jsonResult = {
                'number_of_records': results[0].length,
                'page_number': pageNumber,
                'userdata': results[0],
                'total_number_of_records': results[2][0].total_records
            }
            return res.status(200).json(jsonResult);
        }
    } catch (error) {
        let message = 'Server is unable to process your request.';
        return res.status(500).json({
            message: message
        });
    }

}; //End of processGetUserData

exports.processGetOneUserData = async(req, res, next) => {
    let recordId = req.params.recordId;
    console.log("record id: " + recordId);
    try {
        let results = await userManager.getOneUserData(recordId);
        console.log('Inspect result variable inside processGetOneUserData code\n', results);
        if (results) {
            var jsonResult = {
                'userdata': results[0],
            }
            return res.status(200).json(jsonResult);
        }
    } catch (error) {
        let message = 'Server is unable to process your request.';
        return res.status(500).json({
            message: message
        });
    }

}; //End of processGetOneUserData


exports.processUpdateOneUser = async(req, res, next) => {
    console.log('processUpdateOneUser running');
    //Collect data from the request body 
    let recordId = req.body.recordId;
    let newRoleId = req.body.roleId;
    try {
        results = await userManager.updateUser(recordId, newRoleId);
        console.log(results);
        let message = 'Completed update';
        return res.status(200).json({ message: message });
    } catch (error) {
        console.log('processUpdateOneUser method : catch block section code is running');
        console.log(error, '=======================================================================');
        let message = 'Unable to complete update operation';
        return res.status(500).json({ message: message });
    }


}; //End of processUpdateOneUser

exports.processGetOneDesignData = async(req, res, next) => {
    let recordId = req.params.fileId;

    try {
        let results = await userManager.getOneDesignData(recordId);
        console.log('Inspect result variable inside processGetOneFileData code\n', results);
        if (results) {
            var jsonResult = {
                'filedata': results[0],
            }
            return res.status(200).json(jsonResult);
        }
    } catch (error) {
        let message = 'Server is unable to process the request.';
        return res.status(500).json({
            message: message
        });
    }

}; //End of processGetOneDesignData

exports.processSendInvitation = async(req, res, next) => {
    
    let userId = req.headers.user;
    let recipientEmail = req.body.recipientEmail;
    let recipientName = req.body.recipientName;
    console.log('userController processSendInvitation method\'s received values');
    console.log(userId);
    console.log(recipientEmail);
    console.log(recipientName);

    try {
        //Need to search and get the user's email information from the database
        //first. The getOneuserData method accepts the userId to do the search.
        let userData = await userManager.getOneUserData(userId);
        console.log(userData);
        let results = await userManager.createOneEmailInvitation(userData[0],recipientName, recipientEmail);
        if (results) {
            var jsonResult = {
                result: 'Email invitation has been sent to ' + recipientEmail + ' ',
            }
            return res.status(200).json(jsonResult);
        }
    } catch (error) {
        console.log(error);
        let message = 'Server is unable to process the request.';
        return res.status(500).json({
            message: message,
            error: error
        });
    }

}; //End of processSendInvitation



exports.processUpdateOneDesign = async(req, res, next) => {
    console.log('processUpdateOneFile running');
    //Collect data from the request body 
    let fileId = req.body.fileId;
    let designTitle = req.body.designTitle;
    let designDescription = req.body.designDescription;
    try {
        results = await userManager.updateDesign(fileId, designTitle, designDescription);
        console.log(results);
        let message = 'Completed update';
        return res.status(200).json({ message: message });
    } catch (error) {
        console.log('processUpdateOneUser method : catch block section code is running');
        console.log(error, '=======================================================================');
        let message = 'Completed update';
        return res.status(500).json({ message: message });
    }


}; //End of processUpdateOneDesign