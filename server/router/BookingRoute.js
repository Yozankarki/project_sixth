const express = require('express');
const router = express.Router();
const { BookRoom, CancelBookedRoom, UpdateBookedRoom, GetAllBookedRooms } = require('../Controllers/BookingController');

router.route('/allbooking').get(GetAllBookedRooms);
router.route('/').post(BookRoom);
router.route('/update').post(UpdateBookedRoom);
router.route('/cancel/:id').post(CancelBookedRoom)

module.exports = router;