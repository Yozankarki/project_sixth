const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "room",
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "userId is needed."]
    },
    reviews: {
        type: String,
        required: [true, "Enter Room reviews"],
        min: [3, "Description is smaller than expected."],
        max: [100, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    ratings: {  
        type: Number,
        required: [true, "Enter rating"],
        min: 0,
        max: 5
    }
});

// Compound unique index on user_id and hotel_id
reviewSchema.index({ user_id: 1, hotel_id: -1 }, { unique: true }, { autoIndex: false });

const Reviews = mongoose.model('review', reviewSchema);

module.exports = Reviews;

