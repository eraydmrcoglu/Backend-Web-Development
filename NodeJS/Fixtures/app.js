const express = require('express');
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute');
const furnitureRoute = require('./routes/furnitureRoute');
const app= express()

//--------------CONNECT DB---------------------
mongoose.connect("mongodb://localhost/fixtures-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

//--------------TEMPLATE ENGİNE----------------
app.set('view engine','ejs')


//--------------MIDDLEWARES--------------------
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



//--------------ROUTES-------------------------

app.use('/', pageRoute);
app.use('/furnitures', furnitureRoute);

const port=4000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
  });