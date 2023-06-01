const mongoose = require("mongoose");
const Car = require("./schema/Car");

mongoose.connect("mongodb://127.0.0.1:27017/dbShowroom");

Car.find()
  .then((cars) => {
    mongoose.connection.close();
    console.log(`--- LIST CAR ---`);

    cars.forEach((car) => {
      console.log(`Name: ${car.name}`);
      console.log(`Transmission: ${car.transmission}`);
      console.log(`Review: ${car.review}`);
      console.log(``);
    });
  })
  .catch((err) => {
    mongoose.connection.close();

    console.log(err);
  });
