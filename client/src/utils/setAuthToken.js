import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Applies authorization token to every request if the user is logged in.
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Deletes the authorization header that I had originally created when testing the backend routes.
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;