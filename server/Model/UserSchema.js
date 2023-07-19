const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide valid Username."],
        minlength: [3, "Name is smaller than expected."],
        maxlength: [20, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email."],
        maxlength: [30, 'Maximum length of the field is exceeded'],
        unique: [true, 'Email exists.']
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password."],
        minlength: [6, "Password should be at least 8 characters long."],
        maxlength: [1024, 'Maximum length of the field is exceeded'],
        unique: false,
    },
    confirmPassword: {
        type: String,
        required: [false, "Enter Confirm Password"],
        minlength: [6, "Password should be at least 8 characters long."],
        maxlength: [1024, 'Maximum length of the field is exceeded'],
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