const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FurnitureSchema = new Schema({

     name: {
         type:String,
         unique:true,
         required:true,
     },
     
     description:{
         type:String,
         required:true,
         trim:true,
     },
     
     createdAt :{
         type:Date,
         default:Date.now,
     },

});

const Furniture = mongoose.model('Furniture',FurnitureSchema);
module.exports= Furniture;