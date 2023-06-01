const mongoose = require("mongoose");
const Car = require("./schema/Car");
const Person = require("./schema/Person");

mongoose.connect("mongodb://127.0.0.1:27017/dbShowroom");

// Car.find()
//   .then((cars) => {
//     // mongoose.connection.close();

//     console.log(`--- LIST CAR ---`);
//     cars.forEach((car) => {
//       console.log(`Name: ${car.name}`);
//       console.log(`Transmission: ${car.transmission}`);
//       console.log(`Review: ${car.review}`);
//       console.log(``);
//     });
//   })
//   .catch((err) => {
//     mongoose.connection.close();

//     console.log(err);
//   });

Person.find()
  .populate("favouriteCar")
  .then((persons) => {
    console.log(`--- LIST People ---`);

    persons.forEach((person) => {
      console.log(`Name: ${person.name}`);
      console.log(`Age: ${person.age}`);
      if (person.favouriteCar) {
        console.log(`Favourite Car: ${person.favouriteCar.name}`);
      }
      console.log(``);
    });
    mongoose.connection.close();
  })
  .catch((err) => {
    mongoose.connection.close();

    console.log(err);
  });
