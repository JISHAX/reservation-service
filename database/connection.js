
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/reservations';

const db = mongoose.connect(mongoUri);

module.exports = db;