const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const uuid = require('uuid/v4');
const app = express();
const methodOverride = require('method-override');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const movieQuotesDb = {
  'd9424e04-9df6-4b76-86cc-9069ca8ee4bb': {
    id: 'd9424e04-9df6-4b76-86cc-9069ca8ee4bb',
    quote: 'Why so serious?',
  },
  '27b03e95-27d3-4ad1-9781-f4556c1dee3e': {
    id: '27b03e95-27d3-4ad1-9781-f4556c1dee3e',
    quote: 'YOU SHALL NOT PASS!',
  },
  '5b2cdbcb-7b77-4b23-939f-5096300e1100': {
    id: '5b2cdbcb-7b77-4b23-939f-5096300e1100',
    quote: "It's called a hustle, sweetheart.",
  },
  '917d445c-e8ae-4ed9-8609-4bf305de8ba8': {
    id: '917d445c-e8ae-4ed9-8609-4bf305de8ba8',
    quote: 'The greatest teacher, failure is.',
  },
  '4ad11feb-a76a-42ae-a1c6-8e30dc12c3fe': {
    id: '4ad11feb-a76a-42ae-a1c6-8e30dc12c3fe',
    quote: 'Speak Friend and Enter',
  },
};

const quoteComments = {
  '70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac': {
    id: '70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac',
    comment: 'So awesome comment!',
    quoteId: 'd9424e04-9df6-4b76-86cc-9069ca8ee4bb',
  },
};

// Create, Read, Update, Delete

// Read the list of quotes
app.get('/quotes', (req, res) => {
  res.json(movieQuotesDb);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
