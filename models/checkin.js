const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CheckinSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    cough: {
        type: Boolean,
        default: false
    },

    shortnessOfBreath: {
        type: Boolean,
        default: false
    },

    fatigue: {
        type: Boolean,
        default: false
    },

    bodyAche: {
        type: Boolean,
        default: false
    },

    headache: {
        type: Boolean,
        default: false
    },

    senseLoss: {
        type: Boolean,
        default: false
    },

    soreThroat: {
        type: Boolean,
        default: false
    },

    congestion: {
        type: Boolean,
        default: false
    },

    nausea: {
        type: Boolean,
        default: false
    },

    diarrhea: {
        type: Boolean,
        default: false
    },

    comments: {
        type: String
    },

    temperature: {
        type: Number
    }
    
});

const Checkin = mongoose.model("Checkin", CheckinSchema);

module.exports = Checkin;