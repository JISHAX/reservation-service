
const mongoose = require('mongoose');
const mongoUri = 'mongodb://database:27017/reservations';

mongoose.connect(mongoUri, { useNewUrlParser: true});

module.exports = mongoose;



