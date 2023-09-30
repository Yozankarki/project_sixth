const express = require('express');
const router = express.Router();
const { recommend } = require("../Controllers/RecommendController");


router.route('/').get(recommend);

module.exports = router;