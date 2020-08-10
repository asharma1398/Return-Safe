// Imports dependencies.
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Imports action definitions from the types.js file.
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
  } from "./types";

// Makes an axios call to register the user.
export const registerUser = (userData, history) => dispatch => {
    axios
      .post("/api/users/register", userData)
      // If successful, this `push` redirects the user to the login page.
      .then(res => history.push("/login"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

// Makes another axios call for the user to log in and receive their token (JWT).
export const loginUser = userData => dispatch => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
    // The JWT is saved to localStorage, so that the user is able to navigate the pages that they are now authorized to view.
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // The token is passed through the authorization header.
        setAuthToken(token);
        // The token is decoded, so that the user data can be read.
        const decoded = jwt_decode(token);
        // Once decoded, this sets the current user.
        dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
};

// Sets the current user.
export const setCurrentUser = decoded => {
    return {
    type: SET_CURRENT_USER,
    payload: decoded
    };
};

export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };

// Logs the user out of the application.
export const logoutUser = () => dispatch => {
    // Removes the token from local storage.
    localStorage.removeItem("jwtToken");
    // Removes the authorization header from the route for any future requests.
    setAuthToken(false);
    // Sets the current user to an empty object {}, which will set `isAuthenticated` to false since they are now unidentified.
    dispatch(setCurrentUser({}));
  };