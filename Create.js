const mongoose = require("mongoose");
const Car = require("./schema/Car");

mongoose.connect("mongodb://127.0.0.1:27017/dbShowroom");

const bmw = new Car({
  name: "BMW 3 GT",
  price: 200000000,
  transmission: "MT",
  review: "mobil yang bagus",
});

const mazda = new Car({
  name: "RX 8",
  price: 150000000,
  transmission: "MT",
  review: "mobil classic",
});

Car.insertMany([bmw, mazda])
  .then(() => {
    console.log("Data saved");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
