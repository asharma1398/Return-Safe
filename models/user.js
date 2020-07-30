const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First name required"
    },

    lastName: {
        type: String,
        trim: true,
        required: "Last name required"
    },

    email: {
        type: String,
        unique: true,
        required: "Email is required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        unique: true,
        required: "Password is required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    userCreated: {
        type: Date,
        default: Date.now
    },

    fullName: String,

    locations: [
        {
            type: Schema.Types.ObjectId,
            ref: "Geolocation"
        }
    ],

    checkins: [
        {
            type: Schema.Types.ObjectId,
            ref: "Checkin"
        }
    ]
});

UserSchema.methods.setFullName = function() {
    this.fullName = `${this.firstName} ${this.lastName}`;

    return this.fullName;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;