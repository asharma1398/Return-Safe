import axios from "axios";

export default {
    saveCheckin: function(id, checkinData) {
        return axios.post("/api/checkins/" + id, checkinData);
    },
    find: function(id) {
        return axios.get("/api/checkins/" + id);
    }
    // findByDate: function(date) {
    //     return axios.get("/api/checkins/" + date);
    // }
}