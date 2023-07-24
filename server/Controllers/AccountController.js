const User = require('../Model/UserSchema');
const { createSecretToken } = require("../Database/secretToken");
const bcrypt = require('bcrypt');

/*POST: http://localhost:3000/api/register */
module.exports.Register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    } else if (password === confirmPassword) {
      const user = await User.create({ name, email, password });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false
      });
      return res.status(201).json({ message: "User signed in successfully", success: true, user });
    } else { return res.json({ message: "Password doesn't match." }) }
  }
  catch (error) {
    console.error(error);
  }
};

//Login POST Route
module.exports.Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
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

//Middleware for verify user
module.exports.verifyUser = async (req, res, next) => {
  try {
    const { email } = req.method == "GET" ? req.query : req.body;
    //check the user existence
    let exist = await User.findOne({ email });
    if (!exist) return res.status(404).send({ error: "Cannot find Email." });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error." });
  }
}

/** GET Users */
module.exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findUser = await User.findById(id);
    if (!findUser) return res.status(404).send({ error: "No User Found" });

    /** remove password from findUser */
    //mongoose return unnecssary data with object so convert it into json
    const { password, ...rest } = Object.assign({}, findUser.toJSON());
    res.status(201).send(rest);
  } catch (error) {
    return res.status(500).send({ error: 'Internal Server Error' });
  }
}

/** Update Users */
module.exports.updateUser = async (req, res, next) => {
  try {
    const id = req.query.id;
    if (id) {
      const body = req.body;
      const updateUser = await User.updateOne({ _id: id }, body);
      if (!body) return res.status(404).send({ error: "Nothing to update." });
      else res.status(201).send({ msg: 'Record Updated Successfully...' });
    } else {
      return res.status(401).send({ error: 'User Not Found...!' })
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
}

/**Update the password */
module.exports.resetPassword = async (req, res, next) => {
  try {

  } catch (error) {
    return res.status(404).send({ error: '' });
  }
}