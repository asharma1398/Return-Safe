const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GeolocationSchema = new Schema({
    recordedAt: {
        type: Date,
        default: Date.now
    },
    
    latitude: {
        type: Number
    },

    longitude: {
        type: Number
    },

    time: {
        type: Number
    }
});

const GeoLocation = mongoose.model("Geolocation", GeolocationSchema);

module.exports = GeoLocation;