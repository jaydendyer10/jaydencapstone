const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Create the Express application
var app = express();

// Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
require('./config/database');

// Must first load the models
require('./models/item');

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Allows our React application to make HTTP requests to Express application
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.use('/api', routes);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));