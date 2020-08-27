const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require("mongodb");
const bodyParser = require("body-parser");
const app = express();


/// importing routes for posting and getting
/// questions
const questionRoutes = require('./routes/question');
/// users
const userRoutes = require('./routes/user');
/// email
const emailRoutes = require('./routes/email');


/// connection to the database
mongoose
  .connect(
    "mongodb+srv://tech387:KQ3g2wDJcsu4d8M@pricecalculator.ztcak.mongodb.net/users-answers?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  /// connection success
  .then(() => {
    console.log("Connected to database");
  })
  /// connection failed
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

/// we want to allow all possible client apps to comunicate with our server
/// to do that and to avoid CORS errors we need to set the headers
/// so we create another middleware  where we setHeader to access only our browser understand
/// and with the next we go to the next middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/JSON", questionRoutes);
app.use('/api/user', userRoutes);
app.use('/sendmail', emailRoutes);

module.exports = app;
