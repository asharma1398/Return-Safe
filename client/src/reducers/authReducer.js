// Reducers are pure functions that specify how the application state should change in response to an action. Reducers respond with the new state, which is the passed to the store, and then to the user interface.

// Imports the actions from the types.js file.
import {
    SET_CURRENT_USER,
    USER_LOADING
} from "../actions/types";

const isEmpty = require("is-empty");

// Defines the initialState.
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

// Defines how the state should change based on the actions with a switch statement.
export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
};