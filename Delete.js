const mongoose = require("mongoose");
const Car = require("./schema/Car");

mongoose.connect("mongodb://127.0.0.1:27017/dbShowroom");

Car.deleteOne({ _id: "647823ea4b71af60902e9b19" })
  .then(() => {
    mongoose.connection.close();
    console.log("Data deleted");
  })
  .catch((err) => {
    mongoose.connection.close();
    console.log(err);
  });
