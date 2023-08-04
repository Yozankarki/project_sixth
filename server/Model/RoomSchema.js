const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please specify the type."],
        max: [20, "Maximum length exceeded."]
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: [true, "Enter Room Description"],
        min: [3, "Description is smaller than expected."],
        max: [100, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    location: {
        type: String,
        required: [true, "Enter Location"],
    },
    image: {
        type: String,
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
