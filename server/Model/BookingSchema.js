const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    CheckIn: {
        type: Date,
        required: [true, "CheckIn date Required."],
        validate: {
            validator: function (value) {
                return value >= new Date();
            },
            message: "CheckIn date should be greater than or equal to today's date."
        }
    },
    CheckOut: {
        type: Date,
        required: [true, "CheckOut date Required"],
        validate: {
            validator: function (value) {
                if (this.CheckIn) {
                    return value > this.CheckIn;
                }
                return true;
            },
            message: "CheckOut date should be at least one day after CheckIn date."
        }
    },
    No_of_rooms: {
        type: Number,
        required: [true, "Enter No of rooms."],
        min: [1, "Number of rooms must be at least 1."]
    },
    Adults: {
        type: Number,
        required: true,
        min: [1, "Number of adults must be at least 1."]
    },
    Children: {
        type: Number,
        required: true
    },
    Booked_room_Id: {
        type: String,
        required: true
    },
    Booked_user_Id: {
        type: String,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
