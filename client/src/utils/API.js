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
     },
    saveCheckin: function(id, checkinData) {
        return axios.post("/api/checkins/" + id, checkinData);
    },
    find: function(id, lowDate, highDate) {
        return axios.get(`/api/checkins/${id}/${lowDate}/${highDate}`);
    }
}
