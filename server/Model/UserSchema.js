const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide valid Username."],
        min: [3, "Name is smaller than expected."],
        max: [20, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email."],
        max: [30, 'Maximum length of the field is exceeded'],
        unique: [true, 'Email exists.'],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password."],
        min: [6, "Password should be at least 8 characters long."],
        max: [1024, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    confirmPassword: {
        type: String,
        required: [false, "Enter Confirm Password"],
        min: [6, "Password should be at least 8 characters long."],
        max: [1024, 'Maximum length of the field is exceeded'],
        unique: false,
        validate: {
            validator: function (value) {
                return value === this.get('password');
            },
            message: 'Passwords must match',
        },
    }

});
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
})
const User = mongoose.model.Users || mongoose.model("User", userSchema);
module.exports = User;