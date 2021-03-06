// Required dependencies
var express = require('express');
var path = require('path');

// Configure the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Application routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});