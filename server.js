const express = require('express');
const app = express();
app.use(express.json());
const Stratford = require('./data/Stratford.json');

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'You have reached the London Mini Guide server.... Route to /pharmacies, /doctors, /colleges, /hospitals'
    );
});

app.get('/:city/pharmacies', (req, res) => {
  const { city } = req.params;
  if (city.toUpperCase() === 'STRATFORD') {
    res.status(200).json(Stratford.pharmacies);
  } else {
    res
      .status(404)
      .send(`The data for "${city}" was not found in our database!`);
  }
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
