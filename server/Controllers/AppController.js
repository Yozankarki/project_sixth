const User = require('../Model/UserSchema');
const { createSecretToken } = require("../Database/secretToken");
const bcrypt = require('bcrypt');

/*POST: http://localhost:3000/api/register */
module.exports.Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false
    });
    res.status(201).json({ message: "User signed in successfully", success: true, user });
  }
  catch (error) {
    console.error(error);
  }
};

//Login POST Route
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required " });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false
    });
    res.status(201).json({ message: "User logged in successfully" });
  }
  catch (error) {
    console.error(error);
  }
}

















// Function to handle user registration
// exports.register = async (req, res, next) => {
//   try {
//     const { name, email, password, confirmPassword } = req.body;

//     //hash the password
//     const hashedPassword = bcrypt.hash(password, 10);
//     //create a new user
//     const user = new userModel({
//       name: name,
//       email: email,
//       password: password,
//     });
//     const result = user.save();
//     res.status(200).send({ msg: "user Registered Successfully." })
//   } catch (error) {
//     next(error);
//   }
  // try {
  //   const { name, email, password, confirmPassword } = req.body;

  //   // Check if the email already exists
  //   const userExists = await userModel.findOne({ email });
  //   if (userExists) {
  //     return res.status(400).send({ error: "Email already exists." });
  //   }

  //   // Hash the password
  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   // Create the new user
  //   const user = new userModel({
  //     name,
  //     email,
  //     password: hashedPassword,
  //   });

  //   // Save the user to the database
  //   const result = await user.save();

  //   res.status(201).send({ msg: "User Registered Successfully." });
  // } catch (error) {
  //   next(error);
  // }
//};

// /*POST: http://localhost:3000/api/register */
// export async function login(req, res) {
//     res.json('login mode');
// }

// /**  */
// export async function getUser(req, res) {
//     res.json("get user ");
// }

// export async function updateUser(req, res) {
//     res.json('update user');
// }