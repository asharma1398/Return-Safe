// Pulls in our required dependencies.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creates a schema for the User.
const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Exports the User model, so that it can be accessed outside of the file.
module.exports = User = mongoose.model("users", UserSchema);