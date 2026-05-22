const mongoose = require("mongoose");
const {model} = mongoose;


const {userSchema} = require("../schemas/UserSchema");

const UserModel = model("User", userSchema);

module.exports = {UserModel};
