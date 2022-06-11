const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');

const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify:false
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
app.use(fileUpload());

const port = 3000;

//ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photo/:id', photoController.getPhotoById);
app.get('/photo/edit/:id', photoController.editPhotoById);
app.post('/photo', photoController.createPhoto);
app.put('/photo/:id', photoController.updatePhoto);
app.delete('/photo/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda baslatıldı`);
});

