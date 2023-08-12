require('dotenv').config();
const Reviews = require('../Model/ReviewSchema');

module.exports.userReviews = async (req, res, next) => {
    try {
        const review = new Reviews({
            "reviews": "bad experience at hotel",
            "ratings": 5,
            "hotel_id": "64d7086b374e1e465a62a1dd",
            "user_id": "64d70644374e1e465a62a1c7"
        });
        await review.save();
        return res.status(201).json({ message: "Reviews added successfully.", review });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Duplicate review for the same hotel by the same user" });
        } else {
            return res.status(400).json({ error: "Error saving review:", error });
        }
    }
}