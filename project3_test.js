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





//this

function showPosition(position) {


    var lat = position.coords.latitude
    var lon = position.coords.longitude

    var lon_id = Math.floor(lon / (.0000898 / Math.cos(lat)))
    var lat_id = Math.floor(lat / (.0000895 / Math.sin(90 - lon)))

    var lonLat = JSON.parse(localStorage.getItem("angle"));

    var oldLon_id = lonLat[0]
    var oldLat_id = lonLat[1]

    var newLonLat = [lon_id, lat_id]

    localStorage.setItem("angle", JSON.stringify(newLonLat));
    
    if (lon_id != oldLon_id || lat_id != oldLat_id) {
       
        if (duration >= 10) {
            //save info to db
        }
        duration = 0
    }
}

// vs



function showPosition(position) {


    var lat = position.coords.latitude
    var lon = position.coords.longitude

    var lonLat = JSON.parse(localStorage.getItem("dist"));

    var oldLon_id = lonLat[0]
    var oldLat_id = lonLat[1]

    if (Math.abs(lon - oldLon_id) >  (.0000898 / Math.cos(lat)) || Math.abs(lat - oldLat_id) >  (.0000895 / Math.sin(90 - lon))) {
       
        if (duration >= 10) {
            //save info to db
        }
        duration = 0
        var newLonLat = [lon, lat]
        localStorage.setItem("dist", JSON.stringify(newLonLat));
    }
}