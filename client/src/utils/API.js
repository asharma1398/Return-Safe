import axios from "axios";

export default {
    saveCheckin: function(checkinData) {
        return axios.post("/api/checkins", checkinData);
    },
    find: function() {
        return axios.get("/api/checkins");
    }
}