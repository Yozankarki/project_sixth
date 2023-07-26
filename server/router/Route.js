const express = require('express');
const router = express.Router();
const { userVerification } = require('../MiddleWares/AuthMiddleware');
const { Register, Login, verifyUser, getUser, resetPassword, updateUser, getUserDetails } = require('../Controllers/AccountController');

//defining the routes using the router object
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

/**POST Methods */
router.route('/register').post(Register);
router.route("/login").post(verifyUser, Login);
router.route("/authenticate").post(verifyUser, (req, res) => res.end());

/**GET Methods */
router.route('/user/:id').get(getUser);
router.route('/token').get(getUserDetails);

/**PUT methods */
router.route('/updateuser').put(userVerification, updateUser);
router.route('/resetpassword').put(resetPassword);

module.exports = router;