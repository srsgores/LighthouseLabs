const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const app = express()

const port = 3000

app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'public/styles/scss'),
  dest: path.join(__dirname, 'public/styles/css'), 
  debug: true,
  outputStyle: 'compressed',
}));

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.listen(port, () => console.log(`Express server running on port ${port}`));