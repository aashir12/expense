require('dotenv').config();
const mongoose = require('mongoose');

// Importing mongoURI from data file
const mongoURI = require('../data');

// Connect to MongoDB using the URI from the environment variable
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



var expenseSchema=mongoose.Schema(
  {
    name:String,
    amount:Number
  }
)


module.exports= mongoose.model('expense',expenseSchema)