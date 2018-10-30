const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/Reservation.js');
const path = require('path');

const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/listings/:id/reservations', (req, res) => {
  db.find({resId: req.params.id})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
});


app.listen(port, () => {
  console.log('server is up listening on 3003!');
});


