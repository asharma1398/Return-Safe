import API from "../API"




export default{
    
    showPosition: function(position, user) {

       console.log(user)
    
    var lat = position.coords.latitude
    var lon = position.coords.longitude

    // console.log(lat)

    // var lonLat = JSON.parse(localStorage.getItem("dist"));
 

    // var oldLon_id = lonLat[0]
    // var oldLat_id = lonLat[1]


    // if (Math.abs(lon - oldLon_id) >  (.0000898 / Math.cos(lat)) || Math.abs(lat - oldLat_id) >  (.0000895 / Math.sin(90 - lon))) {
        var duration = JSON.parse(localStorage.getItem("dur"));
        if (duration >= 10) {
            const location = 
                {
                  latitude: lat.toString(),
                  longitude: lon.toString(),
                  time: duration,
                //   userId: "b" 
                }
            API.saveLocation(user.id, location)

        localStorage.setItem("dur", JSON.stringify(0));
        localStorage.setItem("reset", "true");
        
        }
        // duration = 0
        var newLonLat = [lon, lat]
        localStorage.setItem("dist", JSON.stringify(newLonLat));
    // }
}
}
