var duration = 0
const interval = setInterval(function () {
    // method to be executed;
     duration++
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}, 60000);

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