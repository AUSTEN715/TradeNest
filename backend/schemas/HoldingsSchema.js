const mongoose = require("mongoose");

const {Schema} = mongoose;

const HoldingsSchema = new Schema({
  name: String, 
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This ID belongs to a document in the User collection. Why is this useful? Later, when you fetch an Order, you can ask Mongoose to "populate" this field. Mongoose will automatically take the ID, go to the User collection, find that user, and replace the ID with the actual user data (name, email, etc.).
    required: true,
  },
});

module.exports = {HoldingsSchema};