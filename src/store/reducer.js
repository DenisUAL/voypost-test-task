import { combineReducers } from "redux";
import { GET_TRIPS, SET_TRIPS } from "./actionTypes";

export default combineReducers({
  trips: function(state = [], action) {
    switch (action.type) {
      case GET_TRIPS: {
        return action.payload;
      }
      case SET_TRIPS: {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  }
});
