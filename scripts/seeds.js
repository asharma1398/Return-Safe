const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covidtracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const checkinSeed = [
    {
        date: new Date(),
        cough: true,
        headache: true,
        congestion: true,
        temperature: 98
    },
    {
        date: new Date(),
        cough: true,
        headache: true,
        congestion: true,
        temperature: 99,
        comments: "Forgot mask in library after lunch. Sneezed at help desk."
    }
];

db.Checkin.deleteMany({})
    .then(() => db.Checkin.collection.insertMany(checkinSeed))
    .then(data => {
        console.log(data.result.n + " checkins inserted!");
        console.log(data);

        db.User.findOneAndUpdate({name: "Susan"}, { checkins: [mongoose.Types.ObjectId(data.ops[0]._id), mongoose.Types.ObjectId(data.ops[1]._id)]})
            .then(data => {
                console.log(data + " updated!");
                process.exit(0);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });