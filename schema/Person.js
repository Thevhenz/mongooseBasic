const mongoose = require("mongoose");
const Car = require("./Car");
const { Schema } = mongoose;

const personSchema = new Schema({
  name: String,
  age: Number,
  favouriteCar: {
    type: Schema.Types.ObjectId,
    ref: "Car",
  },
});

module.exports = mongoose.model("Person", personSchema);
