require('dotenv').config();
const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log('Successfully connected to Database.');
    } catch (error) {
        console.log("Unable to connect to the Database", error);
    }
}
module.exports = conn;
