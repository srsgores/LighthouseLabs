const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const uuid = require('uuid/v4');
const app = express();
const methodOverride = require('method-override');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// specify the static asset folder (css, images, etc)
app.use(express.static('public'));

// using ejs for the views
app.set('view engine', 'ejs');

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

const getComments = quoteId => {
  return Object.values(quoteComments).filter(
    commentObj => commentObj.quoteId === quoteId
  );
};

// Get a list of quotes and add the comments to each one
const quoteList = () => {
  const quotes = {};

  for (const quoteId in movieQuotesDb) {
    quotes[quoteId] = movieQuotesDb[quoteId];
    // get the comments associated with this quoteId
    quotes[quoteId].comments = getComments(quoteId);
  }

  return Object.values(quotes);
};

// creating a quote and add it to movieQuotesDB
const createQuote = content => {
  const id = uuid();

  const newQuote = {
    id,
    quote: content,
  };

  movieQuotesDb[id] = newQuote;

  return id;
};

// Updating the quote in movieQuotesDb
const updateQuote = (id, content) => {
  movieQuotesDb[id].quote = content;
};

// Create, Read, Update, Delete

// Read the list of quotes
app.get('/quotes', (req, res) => {
  const templateVars = { quotes: quoteList() };
  // res.json(templateVars.quotes);
  res.render('quotes', templateVars);
});

// Creating a new quote
app.get('/quotes/new', (req, res) => {
  res.render('quote_new');
});

app.post('/quotes', (req, res) => {
  // extract the content from the form
  const { quoteContent } = req.body;

  // Create a new quote and add it to db

  const id = createQuote(quoteContent);

  // redirect to newly created quote - show page
  res.redirect(`/quotes/${id}`);
});

// get a single quote to be displayed
app.get('/quotes/:id', (req, res) => {
  // extracting the id from the url
  const { id } = req.params;

  // Getting the quote with this id from db
  const templateVars = { quote: movieQuotesDb[id] };

  // Display the show page

  res.render('quote_show', templateVars);
});

// Update the quote in db
app.put('/quotes/:id', (req, res) => {
  // extract id from req.params
  const { id } = req.params;

  // Extract the updated quote
  const { quoteContent } = req.body;

  // Updating the quote
  updateQuote(id, quoteContent);

  // redirect to list of quotes
  res.redirect('/quotes');
});

// deleting a quote from db
app.delete('/quotes/:id', (req, res) => {
  const { id } = req.params;

  delete movieQuotesDb[id];

  res.redirect('/quotes');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
