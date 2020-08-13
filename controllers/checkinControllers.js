const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body);
        db.Checkin
            .create(req.body)
            .then(checkin => {
                console.log(checkin);

                // db.User.findOneAndUpdate({ name: "Zach"}, { checkins: [checkin]})
                //     .then(user => {
                //         console.log(user);
                //         res.json(user);
                //     })
                //     .catch(err => {
                //         res.status(422).json(err);
                //     });
            })
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        console.log(req.user);
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