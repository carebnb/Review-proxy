const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser());
app.use(bodyParser.urlencoded());

app.get('/messages', (req, res) => {
  axios.get('http://localhost:3001/messages')
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error with messages => ', err);
    });
});
app.get('/photos', (req, res) => {
  const listingId = req.query.listingid;
  axios.get(`http://localhost:3002/photos/?listingid=${listingId}`)
    .then((responce) => {
      res.send(responce.data);
    })
    .catch((err) => {
      console.log('Error with photos =>', err);
    });
});
app.get('/listinginfo', (req, res) => {
  const listingId = req.query.listingid;
  console.log(listingId);
  axios.get(`http://localhost:3004/listinginfo/?listingid=${listingId}`)
    .then((responce) => {
      res.send(responce.data);
    })
    .catch((err) => {
      console.log('Error with bookings =>', err);
    });
});
app.get('/booking', (req, res) => {
  const listingId = req.query.listingid;
  console.log(listingId);
  axios.get(`http://localhost:3003/booking/?listingid=${listingId}`)
    .then((responce) => {
      res.send(responce.data);
    })
    .catch((err) => {
      console.log('Error with bookings =>', err);
    });
});


app.use(express.static(path.join(__dirname, '/../public')));
const Port = 3009;


app.listen(Port, () => {
  console.log('Listening on port', Port);
});