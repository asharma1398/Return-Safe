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
        console.log(req.params.id);
        db.User
            .find({ _id: mongoose.Types.ObjectId(req.params.id)})
            .populate("checkins")
            .then(user => {
                console.log(user)
                res.json(user)})
            .catch(err => res.status(422).json(err));
    }
    // findbyDate: function (req, res) {
    //     db.Checkin
    //         .find({ date: req.params.data})
    //         .then(checkins => res.json(checkins))
    //         .catch(err => res.status(422).json(err));
    // }
};