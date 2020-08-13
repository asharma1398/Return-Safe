import axios from "axios";

export default {
    saveCheckin: function(id, checkinData) {
        return axios.post("/api/checkins/" + id, checkinData);
    },
    find: function(id, lowDate, highDate) {
        return axios.get(`/api/checkins/${id}/${lowDate}/${highDate}`);
    }
}