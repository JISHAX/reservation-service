const mongoose = require('mongoose');
const db = require('./index.js');

const reservationSchema = new mongoose.Schema({
  id: Number,
  size: Number,
  date: Date,
  time: Date
}, 
  {
    timestamps: true
  }
);

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
