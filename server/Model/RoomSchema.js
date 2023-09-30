const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please Enter Room Name."],
        max: [20, "Maximum length exceeded"]
    },
    Price: {
        type: String,
        required: [true, "Please enter Price."],
        max: [10, "Maximum length exceeded"]
    },
    Location: {
        type: String,
        required: [true, "Please enter Location."],
        max: [20, "Maximum length exceeded"]
    },
    Rating: {
        type: Number,
        required: true,
        max: 10
    },
    Reviews: {
        type: String,
        required: [true, "Enter Room Description"],
        min: [3, "Description is smaller than expected."],
        max: [100, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    Type: {
        type: String,
        required: [true, "Please specify the type."],
        max: [20, "Maximum length exceeded."]
    },
    Images: {
        type: String,
    },
    Pool: {
        type: String
    },
    Gym: {
        type: String
    },
    Spa: {
        type: String
    }
})
roomSchema.pre("save", async function (next) {
    if (this.price < 100 || this.price > 100000) {
        throw new Error('Price must be greater than 100 and smaller than 100000');
    }
    next();
});
const Room = mongoose.model.Rooms || mongoose.model('Room', roomSchema);
module.exports = Room;
