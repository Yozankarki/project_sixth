require('dotenv').config();
const mongoose = require('mongoose');
const userSchema = require('../Model/UserSchema');

const conn = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log('Successfully connected to Database.');
    } catch (error) {
        console.log("Unable to connect to the Database", error);
    }
    const UserData = new userSchema({
        name: "John",
        email: "john@example.<EMAIL>",
        password: "asdfasfaasfs",
    });
    // UserData.save().then((savedUser) => {
    //     console.log(savedUser);
    // }).catch((err) => {
    //     console.log(err);
    // })

}
module.exports = conn;
