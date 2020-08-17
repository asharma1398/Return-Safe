const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    create: function (req, res) {
        console.log(req.body);
        db.Checkin
            .create(req.body)
            .then(checkin => {
                console.log(checkin);

                db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id)}, { $push: {checkins: checkin}})
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
                path: "checkins",
                match: { date: { $gte: req.params.lowDate, $lte: req.params.highDate }}
            })
            .then(user => {
                console.log(user)
                res.json(user)})
            .catch(err => res.status(422).json(err));
    },
    findFever: function (req, res) {
        db.User
            .findById(mongoose.Types.ObjectId(req.params.id))
            .populate({
                path: "checkins",
                match: { temperature: { $gte: 100.4 }}
            })
            .then(user => {
                res.json(user)
            })
            .catch(err => res.status(422).json(err));
    }
};