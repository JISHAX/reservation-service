// const faker = require('faker');
// const fs = require('fs');

// faker.seed(105);

// const fakeRestaurants = [];

// for (let i = 1; i <= 100; i++) {
//   const fakeRestaurant = {id: i};
//   const fakeWords = []
//   const length = faker.random.number() % 3;

//   for (let i = 0; i <= length; i++) {
//     fakeWords.push(faker.random.word())
//   }

//   fakeRestaurant.name = fakeWords.join(' ');

//   fakeRestaurants.push(fakeRestaurant);
// }

// const restaurantsJSON = JSON.stringify(fakeRestaurants);

// fs.writeFileSync('fakerestaurants.json', restaurantsJSON);

const faker = require('faker');
const fs = require('fs');
const Reservation = require('./Reservation');


Reservation.create(faker(100));