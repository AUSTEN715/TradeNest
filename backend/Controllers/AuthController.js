const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({ email, password, username }); // doesnot allow modification
    const token = await createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true, // Allows browser to send cookies
      httpOnly: true,
      sameSite: "none", // Allows cookies to be sent in cross-site requests
      secure: true,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors)
        .map((val) => val.message)
        .join(", ");

      return res.status(200).json({
        success: false,
        message: messages,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true, // Allows browser to send cookies
      httpOnly: true,
      sameSite: "none", // Allows cookies to be sent in cross-site requests
      secure: true,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};

module.exports.Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ success: true, message: "Logged out" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};
