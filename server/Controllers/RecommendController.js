require('dotenv').config();
const axios = require('axios');
const { mean, std } = require('mathjs');
let rooms = [];

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/room/allrooms');
        rooms = response.data;
        console.log('Data fetched from the API.');
    } catch (error) {
        console.error('Error fetching data from the API:', error.message);
    }
}
fetchData();

module.exports.recommend = async (req, res, next) => {
    const searchLocation = req.query.location || '';
    const searchRoomType = req.query.type || '';
    const searchPrice = req.query.price || '';
    const searchRoomRating = req.query.rating || '';

    if (!rooms.length) {
        return res.status(500).json({ error: "Data not available." });
    }

    //Normalize Price and Rating
    const prices = rooms.map(room => room.Price);
    const ratings = rooms.map(room => room.Rating);
    const meanPrice = mean(prices);
    const stdPrice = std(prices);
    const meanRating = mean(ratings);
    const stdRating = std(ratings);

    const recommendations = rooms.map((room) => {
        const locationWords = new Set((room.Location || '').toLowerCase().split(' '));
        const roomTypeWords = new Set((room.RoomType || '').toLowerCase().split(' '));
        const queryLocationWords = new Set(searchLocation.toLowerCase().split(' '));
        const queryRoomTypeWords = new Set(searchRoomType.toLowerCase().split(' '));

        // Calculate Jaccard Similarity for location
        const locationIntersection = new Set([...locationWords].filter((word) => queryLocationWords.has(word)));
        const locationUnion = new Set([...locationWords, ...queryLocationWords]);
        const locationSimilarity = locationUnion.size === 0 ? 0 : locationIntersection.size / locationUnion.size;

        // Calculate Jaccard Similarity for room type
        const roomTypeIntersection = new Set([...roomTypeWords].filter((word) => queryRoomTypeWords.has(word)));
        const roomTypeUnion = new Set([...roomTypeWords, ...queryRoomTypeWords]);
        const roomTypeSimilarity = roomTypeUnion.size === 0 ? 0 : roomTypeIntersection.size / roomTypeUnion.size;

        // Calculate Cosine Similarity for Price and Rating
        const priceA = (room.Price - meanPrice) / stdPrice;
        const ratingA = (room.Rating - meanRating) / stdRating;
        const priceB = (searchPrice - meanPrice) / stdPrice || 0;
        const ratingB = (searchRoomRating - meanRating) / stdRating || 0;
        const cosineSimilarity = (priceA * priceB + ratingA * ratingB) /
            (Math.sqrt(priceA * priceA + ratingA * ratingA) * Math.sqrt(priceB * priceB + ratingB * ratingB));

        const similarity = (0.5 * cosineSimilarity + 0.3 * roomTypeSimilarity + 0.2 * locationSimilarity).toFixed(2);
        return {
            ...room,
            similarity,
        };
    });
    recommendations.sort((a, b) => b.similarity - a.similarity);
    const topRecommendation = recommendations.slice(0, 10);
    res.json(topRecommendation);
}