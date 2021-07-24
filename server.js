const express = require('express');
const app = express();
app.use(express.json());
const STRATFORD = require('./data/Stratford.json');
const HARROW = require('./data/Harrow.json');
const HEATHROW = require('./data/HeathRow.json');

const CITIES = [
  {
    name: 'STRATFORD',
    data: STRATFORD,
  },
  {
    name: 'HARROW',
    data: HARROW,
  },
  {
    name: 'HEATHROW',
    data: HEATHROW,
  },
];

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'You have reached the London Mini Guide server.... To access data go to "/CITY_NAME/CATEGORY"'
    );
});

app.get('/:city/:category', (req, res) => {
  const { city, category } = req.params;

  if (city && category) {
    const myCity = CITIES.find((obj) => obj.name === city.toUpperCase());

    if (myCity) {
      if (category.toLowerCase() in myCity.data) {
        res.status(200).json(myCity.data[category.toLowerCase()]);
      } else {
        res
          .status(404)
          .send(
            `The category "${category}" for "${city}" city was not found in our database!`
          );
      }
      res.status(200).json(Stratford.pharmacies);
    } else {
      res
        .status(404)
        .send(`The data for "${city}" city was not found in our database!`);
    }
  } else {
    res.status(400).send(`You should provide both city and category!`);
  }
});

app.listen(process.env.PORT || 3000, () => console.log('Server started...'));
