const express = require('express');
const router = express.Router();
const { Register, Login } = require('../Controllers/AppController');

router.route('/register').post(Register);
router.route("/login").post(Login);
// router.post("/register", Register);

module.exports = router;