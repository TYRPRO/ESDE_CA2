// Import controlers
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserFnSolution = require('./middlewares/checkUserFnSolution');
const checkSearchEmail = require('./middlewares/checkSearchEmail');
const checkValidEmail = require('./middlewares/checkValidEmail');
const checkValidTitleAndDescription = require('./middlewares/checkValidTitle&Description');
const checkSubmissionFile = require('./middlewares/checkSubmissionFile');
const checkInvitation = require('./middlewares/checkInvitation');
const checkNameAndPassword = require('./middlewares/checkName&Password');
const checkDesignOwner  = require('./middlewares/checkDesignOwner');


// Match URL's with controllers
exports.appRoute = router => {
    // login
    //rmb to put back
    //
    router.post('/api/user/login', checkValidEmail.validateEmail, checkNameAndPassword.validatePassword, authController.processLogin);

    // registration
    router.post('/api/user/register', checkValidEmail.validateEmail, checkNameAndPassword.validateNameAndPassword, authController.processRegister);
    
    // submit design
    router.post('/api/user/process-submission', checkUserFnSolution.checkForValidUserId, checkValidTitleAndDescription.validateTextInputs, checkSubmissionFile.checkFile, userController.processDesignSubmission);
    
    // update user role
    router.put('/api/user/', checkUserFnSolution.checkForAdminRole, userController.processUpdateOneUser);
    
    // update submission
    router.put('/api/user/design/', checkDesignOwner.validateOwner, checkUserFnSolution.checkForValidUserId, checkValidTitleAndDescription.validateTextInputs, userController.processUpdateOneDesign);
    
    // invite
    router.post('/api/user/processInvitation/', checkUserFnSolution.checkForValidUserId, checkInvitation.checkvalidInvitation, userController.processSendInvitation);

    
    // get own submission
    router.get('/api/user/process-search-design/:pagenumber/:search?', checkUserFnSolution.checkForValidUserId, userController.processGetSubmissionData);
    
    // get users (admin)
    router.get('/api/user/process-search-user/:pagenumber/:search?', checkUserFnSolution.checkForAdminRole, userController.processGetUserData);
    
    // get one user's design (admin)
    router.get('/api/user/process-search-user-design/:pagenumber/:search?', checkUserFnSolution.checkForAdminRole, checkSearchEmail.validateEmail, userController.processGetSubmissionsbyEmail);
    
    // show profile
    router.get('/api/user/:recordId', checkUserFnSolution.checkForValidUserId, userController.processGetOneUserData);
    
    // show design data
    router.get('/api/user/design/:fileId', checkDesignOwner.restrictView, checkUserFnSolution.checkForValidUserId, userController.processGetOneDesignData);
    
    // get user role
    router.get('/api/getRole',  checkUserFnSolution.returnUserRole);
};