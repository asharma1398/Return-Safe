const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covidtracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const checkinSeed = [
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 14)).setHours(10, 00, 00, 000)),
        temperature: 98,
        comments: "Cousin's wedding"
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 13)).setHours(12, 00, 00, 000)),
        temperature: 98
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 12)).setHours(11, 00, 00, 000)),
        fatigue: true,
        soreThroat: true,
        temperature: 99.2
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 11)).setHours(09, 00, 00, 000)),
        fatigue: true,
        soreThroat: true,
        bodyAches: true,
        temperature: 99.4
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 11)).setHours(17, 00, 00, 000)),
        cough: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 99.8,
        comments: "Forgot mask in library after lunch. Sneezed at help desk."
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 10)).setHours(13, 00, 00, 000)),
        cough: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 100.4,
        comments: "Stayed in bed"
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 9)).setHours(10, 00, 00, 000)),
        cough: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 101
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 8)).setHours(12, 00, 00, 000)),
        cough: true,
        shortnessOfBreath: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 104,
        comments: "Called Health Center"
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 7)).setHours(15, 00, 00, 000)),
        cough: true,
        shortnessOfBreath: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 104
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 6)).setHours(10, 00, 00, 000)),
        cough: true,
        shortnessOfBreath: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 101
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 6)).setHours(17, 00, 00, 000)),
        cough: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 100
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 5)).setHours(09, 00, 00, 000)),
        cough: true,
        headache: true,
        congestion: true,
        temperature: 100
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 4)).setHours(09, 00, 00, 000)),
        cough: true,
        headache: true,
        congestion: true,
        temperature: 99.7
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 3)).setHours(10, 00, 00, 000)),
        cough: true,
        headache: true,
        congestion: true,
        temperature: 99.5
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 2)).setHours(11, 00, 00, 000)),
        cough: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 99.5
    },
    {
        date: new Date(new Date(new Date().setDate(new Date().getDate() - 1)).setHours(09, 00, 00, 000)),
        cough: true,
        bodyAches: true,
        headache: true,
        congestion: true,
        temperature: 99.3
    }
];

db.Checkin.deleteMany({})
    .then(() => db.Checkin.collection.insertMany(checkinSeed))
    .then(data => {
        console.log(data.result.n + " checkins inserted!");
        console.log(data);

        db.User.findOneAndUpdate({ name: "Susan" }, {
            checkins:
                [mongoose.Types.ObjectId(data.ops[0]._id),
                mongoose.Types.ObjectId(data.ops[1]._id),
                mongoose.Types.ObjectId(data.ops[2]._id),
                mongoose.Types.ObjectId(data.ops[3]._id),
                mongoose.Types.ObjectId(data.ops[4]._id),
                mongoose.Types.ObjectId(data.ops[5]._id),
                mongoose.Types.ObjectId(data.ops[6]._id),
                mongoose.Types.ObjectId(data.ops[7]._id),
                mongoose.Types.ObjectId(data.ops[8]._id),
                mongoose.Types.ObjectId(data.ops[9]._id),
                mongoose.Types.ObjectId(data.ops[10]._id),
                mongoose.Types.ObjectId(data.ops[11]._id),
                mongoose.Types.ObjectId(data.ops[12]._id),
                mongoose.Types.ObjectId(data.ops[13]._id),
                mongoose.Types.ObjectId(data.ops[14]._id),
                mongoose.Types.ObjectId(data.ops[15]._id),]
        })
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

const locationSeed = [
    {
        latitude: 39.95368903,
        longitude: -75.20099902,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 14)).setHours(10, 00, 00, 000))
    },
    {
        latitude: 39.90596224,
        longitude: -75.18097088,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 14)).setHours(18, 00, 00, 000))
    },
    {
        latitude: 39.95368903,
        longitude: -75.20099902,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 13)).setHours(10, 00, 00, 000))
    },
    {
        latitude: 39.95453605,
        longitude: -75.20296038,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 13)).setHours(14, 00, 00, 000))
    },
    {
        latitude: 39.95368903,
        longitude: -75.20099902,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 12)).setHours(10, 00, 00, 000))
    },
    {
        latitude: 39.95517754,
        longitude: 75.20046056,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 12)).setHours(10, 00, 00, 000))
    },
    {
        latitude: 39.95368903,
        longitude: -75.20099902,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 11)).setHours(10, 00, 00, 000))
    },
    {
        latitude: 39.95102672,
        longitude: -75.19897674,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 11)).setHours(15, 00, 00, 000))
    },
    {
        latitude: 39.95368903,
        longitude: -75.20099902,
        time: 10,
        recordedAt: new Date(new Date(new Date().setDate(new Date().getDate() - 10)).setHours(10, 00, 00, 000))
    }
    // add more seeds for when sick

]

db.Geolocation.deleteMany({})
    .then(() => db.Geolocation.collection.insertMany(locationSeed))
    .then(data => {
        console.log("locations inserted!");

        db.User.findOneAndUpdate({ name: "Susan"}, {
            locations:
            [
                mongoose.Types.ObjectId(data.ops[0]._id),
                mongoose.Types.ObjectId(data.ops[1]._id),
                mongoose.Types.ObjectId(data.ops[2]._id),
                mongoose.Types.ObjectId(data.ops[3]._id),
                mongoose.Types.ObjectId(data.ops[4]._id),
                mongoose.Types.ObjectId(data.ops[5]._id),
                mongoose.Types.ObjectId(data.ops[6]._id),
                mongoose.Types.ObjectId(data.ops[7]._id),
                mongoose.Types.ObjectId(data.ops[8]._id)
            ]
        })
        .then(data => {
            console.log("user updated!");
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