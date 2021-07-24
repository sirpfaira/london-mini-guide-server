const express = require('express');
const app = express();
app.use(express.json());
const Stratford = require('./data/Stratford.json');

app.get('/pharmacies', (req, res) => {
  res.status(200).json(Stratford.pharmacies);
});
app.get('/doctors', (req, res) => {
  res.status(200).json(Stratford.doctors);
});
app.get('/colleges', (req, res) => {
  res.status(200).json(Stratford.colleges);
});
app.get('/hospitals', (req, res) => {
  res.status(200).json(Stratford.hospitals);
});
app.listen(process.env.PORT || 3000, () => console.log('Server started...'));
