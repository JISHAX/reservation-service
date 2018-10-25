

const faker = require('faker');
const fs = require('fs');
const Reservation = require('./Reservation');
var fakeData = [];
for (var i = 0; i <= 100; i++) {
  const User = {
    id: i,
    size: faker.random.number(),
    date: faker.date.recent(),
    time: faker.date.soon
  };
  fakeData.push(User);
}



Reservation.create(fakeData);
