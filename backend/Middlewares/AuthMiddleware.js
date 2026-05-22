const {UserModel} = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await UserModel.findById(data.id) // Find the user whose ID matches the one inside the token.
      if (user){
        req.user = user;
        next();
      }
      else return res.json({ status: false })
    }
  })
}