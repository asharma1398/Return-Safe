// Pulls in our required dependencies.
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");
require("dotenv").config();

// Initializes the application using the express dependency.
const app = express();

// Applies the middleware function.
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(bodyParser.json());

// Database configuration.
const db = require("./config/keys");

// MongoDB connection using the mongoose dependency.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covidtracker", { useNewUrlParser: true, useUnifiedTopology: true }).then (() => console.log("Successfully made connection to MongoDB."))
.catch(err => console.log(err));

// Passport middleware.
app.use(passport.initialize());

// Passport configuration.
require("./config/passport")(passport);

// Routes
app.use(routes);

// Sets the port for the server to run on.
const PORT = process.env.PORT || 5000;

// The application is listening in on the port.
app.listen(PORT, () => console.log("Server is up and running on PORT 5000."));