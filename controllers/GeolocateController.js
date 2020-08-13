const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.GeoLocation
    .find({recordedAt: req.params.date})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.GeoLocation
        .create(req.body)
        .then(loc => res.json(loc))
        .catch(err => res.status(422).json(err));
},
boxProps: function(req, res) {
    db.Geolocation
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  
}