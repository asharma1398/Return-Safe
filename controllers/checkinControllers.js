const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Checkin
            .create(req.body)
            .then(checkin => res.json(checkin))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        db.Checkin
            .find({})
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
    findbyDate: function (req, res) {
        db.Checkin
            .find({ date: req.params.data})
            .then(checkins => res.json(checkins))
            .catch(err => res.status(422).json(err));
    }
};