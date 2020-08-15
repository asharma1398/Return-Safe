const db = require("../models");
const mongoose = require("mongoose")

// Defining methods for the booksController
module.exports = {
    create: function (req, res) {
        console.log("test create");
        console.log(req.body);
        db.Geolocation
            .create(req.body)
            .then(location => {
                console.log(location);

                db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id)}, { $push: {locations: location}})
                    .then(user => {
                        console.log(user);
                        res.json(user);
                    })
                    .catch(err => {
                        res.status(422).json(err);
                    });
            })
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        db.User
            .find({ _id: mongoose.Types.ObjectId(req.params.id)})
            .populate({
                path: "locations",
                match: { recordedAt: { $gte: req.params.lowDate, $lte: req.params.highDate }}
            })
            .then(user => {
                console.log(user)
                res.json(user)})
            .catch(err => res.status(422).json(err));
    },
boxProps: function(req, res) {
    db.Geolocation
      .findById(mongoose.Types.ObjectId(req.params.id))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  
}