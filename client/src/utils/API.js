import axios from "axios";

export default {
    saveCheckin: function(checkinData) {
        return axios.post("/api/checkins", checkinData);
    },
    find: function(id) {
        return axios.get("/api/checkins/" + id);
    }
    // findByDate: function(date) {
    //     return axios.get("/api/checkins/" + date);
    // }
}