const API = require("../../src/utils/API")

var duration = 0
const interval = setInterval(function () {
    // method to be executed;
     duration++
     navigator.geolocation.getCurrentPosition((showPosition), 
     (error) => console.log(error),
    {
        enableHighAccuracy: true
    });
}, 60000);






function showPosition(position) {


    var lat = position.coords.latitude
    var lon = position.coords.longitude

    var lonLat = JSON.parse(localStorage.getItem("dist"));

    var oldLon_id = lonLat[0]
    var oldLat_id = lonLat[1]

    if (Math.abs(lon - oldLon_id) >  (.0000898 / Math.cos(lat)) || Math.abs(lat - oldLat_id) >  (.0000895 / Math.sin(90 - lon))) {
       
        if (duration >= 10) {
            const location = 
                {
                  latitude: lat,
                  longitude: lon,
                  time: duration
                }
            API.saveLocation(location)
                
        }
        duration = 0
        var newLonLat = [lon, lat]
        localStorage.setItem("dist", JSON.stringify(newLonLat));
    }
}