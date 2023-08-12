const express = require('express');
const router = express.Router();
const { userReviews } = require("../Controllers/RecommendController");

router.get('/', (req, res) => {
    res.send('Hello, RoomController!');
});


router.route('/add').get(userReviews);

module.exports = router;