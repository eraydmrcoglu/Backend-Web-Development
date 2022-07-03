const express = require('express');
const ejs = require('ejs');
const portfolioController = require('./controllers/portfolioController');
const { default: mongoose } = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

mongoose
  .connect(
    'mongodb+srv://dbUser:5gu8994Htd4N97U@cluster0.veenn.mongodb.net/agency?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connected!')
  });

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTING
app.get('/', function (req, res) {
  res.render('index');
});

app.post('/portfolio', portfolioController.addPortfolio);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running port ${port}`);
});
