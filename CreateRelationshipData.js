const mongoose = require("mongoose");
const Car = require("./schema/Car");
const Person = require("./schema/Person");

mongoose.connect("mongodb://127.0.0.1:27017/dbShowroom");

const lamborghini = new Car({
  name: "Lamborghini Gallardo",
  price: 2200000000,
  transmission: "MT",
  review: "mobil yang mewah",
});

lamborghini
  .save()
  .then(() => {
    console.log("Data saved");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });

const sofyan = new Person({
  name: "Muhammad Sofyan",
  age: 26,
  favouriteCar: lamborghini,
});

sofyan
  .save()
  .then(() => {
    console.log("Data saved");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
