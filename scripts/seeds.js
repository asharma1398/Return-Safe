const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covidData", {
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

        let userSeed = [
            {
                firstName: "Susan",
                lastName: "Holland",
                email: "segh@fastmail.com",
                password: "password",
                userCreated: new Date(),
                checkins: [mongoose.Types.ObjectId(data.ops[0]._id), mongoose.Types.ObjectId(data.ops[1]._id)]
            },

            {
                firstName: "Aakanksha",
                lastName: "Sharma",
                email: "Aakon@email.com",
                password: "password",
                userCreated: new Date(),
                checkins: []
            }
        ];

        db.User.deleteMany({})
            .then(() => db.User.collection.insertMany(userSeed))
            .then(data => {
                console.log(data.result.n + " users created!");
                console.log(data);

                let schoolSeed = [
                    {
                        name: "Penn",
                        users: [mongoose.Types.ObjectId(data.ops[0]._id), mongoose.Types.ObjectId(data.ops[1]._id)]
                    }
                ];

                db.School.deleteMany({})
                    .then(() => db.School.collection.insertMany(schoolSeed))
                    .then(data => {
                        console.log(data.result.n + " schools created!");
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
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });