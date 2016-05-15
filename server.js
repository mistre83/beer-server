// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var router = require('./router')
var passport = require('passport');

var fs = require('fs');
var https = require('https');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/beerlocker');

// Create our Express application
var app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
//var router = express.Router();

// Register all our routes with /api
app.use('/api', router);

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

https.createServer(options, app).listen(5001, function() {
  console.log('Server started at port 5001');
})
