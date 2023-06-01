const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  name: String,
  price: Number,
  transmission: String,
  review: String,
});

module.exports = mongoose.model("Car", carSchema);
