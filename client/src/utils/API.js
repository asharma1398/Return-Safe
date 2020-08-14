import axios from "axios";

export default {
    saveCheckin: function(checkinData) {
        return axios.post("/api/checkins", checkinData);
    },
    getLocations: function(id, date){
        return axios.get("/api/mapping/" + id + "/" +date);
    },
    saveLocation: function(locationData) {
        return axios.post("/api/mapping", locationData);
      },
     getBox: function(id){
        return axios.get("/api/mapping/" + id);
     }
    };
