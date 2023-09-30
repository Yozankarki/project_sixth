const express = require('express');
const router = express.Router();
const { addRooms, getSingleRooms, getAllRooms, deleteRoom, UpdateRoom } = require('../Controllers/RoomController');

router.get('/', (req, res) => {
    res.send('Hello, RoomController!');
});

/**POST Methods */
router.route('/add').post(addRooms);

/**GET ROOM */
router.route("/allrooms").get(getAllRooms);
router.route('/find/:id').get(getSingleRooms);
router.route("/delete/:id").get(deleteRoom);
router.route("/update").get(UpdateRoom);

module.exports = router;