const express = require ('express')
const mongoose = require('mongoose');
const pageRoute = require("./routes/pageRoute")
const workoutRoute = require("./routes/workoutRoute")

const app=express()

//------------DB CONNECT----------------
mongoose.connect("mongodb://localhost/misfit-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(()=>{
    console.log('DB Connected')
})

//-----------TEMPLATE ENGİNE------------
app.set('view engine','ejs')


//-----------MIDDLEWARES---------------
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//---------------ROUTER---------------
app.use("/", pageRoute);
app.use("/workouts", workoutRoute);


const port=5000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} portun da çalışıyor`)
})