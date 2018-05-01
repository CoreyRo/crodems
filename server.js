const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const env = require('dotenv').load();
const app = express();
const db = require("./models")


// *****************************************************************************
// * *** Mongoose Setup
// =============================================================================
// = Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose
    .connect(process.env.MONOGDB_LOCALHOST || process.env.MONGO_MLAB)
    .catch(function (err) {
        console.log('mongoose connect error:', err.message)
    })
    // When successfully connected
    mongoose
    .connection
    .on('connected', function () {
        process.env.NODE_ENV === 'production'
            ? console.log(`Mongoose default connection open to process.env.MONGO_MLAB`)
            : console.log(`Mongoose default connection open to process.env.MONGODB_LOCALHOST`);
    });
// If the connection throws an error
mongoose
    .connection
    .on('error', function (err) {
        console.log(`Mongoose default connection error: ${err}`);
    });
// When the connection is disconnected
mongoose
    .connection
    .on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose
        .connection
        .close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static('public'))

require("./routes/routes.js")(app);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
