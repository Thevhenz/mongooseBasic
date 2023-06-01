const mongoose = require("mongoose");
const Car = require("./schema/Car");

mongoose.connect("mongodb://127.0.0.1:27017/dbShowroom");

Car.updateOne({ _id: "64781d7f881633fc550b53b5" }, { name: "Fiat Uno" })
  .then(() => {
    mongoose.connection.close();
    console.log("Data updated");
  })
  .catch((err) => {
    mongoose.connection.close();
    console.log(err);
  });
