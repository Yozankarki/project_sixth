require('dotenv').config();
const axios = require('axios');

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

// Call fetchData to fetch data before starting the server
fetchData();

module.exports.recommend = async (req, res, next) => {
    const searchLocation = req.query.location || '';
    const searchRoomType = req.query.type || '';
    if (!rooms.length) {
        return res.status(500).json({ error: "Data not available." });
    }
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

        const similarity = 0.6 * locationSimilarity + 0.4 * roomTypeSimilarity;
        return {
            ...room,
            similarity,
        };
    });
    recommendations.sort((a, b) => b.similarity - a.similarity);
    const topRecommendation = recommendations.slice(0, 10);
    res.json(topRecommendation);
}
