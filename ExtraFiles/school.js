const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "School name is required"
    },

    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const School = mongoose.model("School", SchoolSchema);

module.exports = School;