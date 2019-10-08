import trips from "../constants/tripsData";
import { SET_TRIPS, GET_TRIPS } from "./actionTypes";

export const setTrips = payload => ({
  type: SET_TRIPS,
  payload
});

export const getTrips = () => ({ type: GET_TRIPS, payload: trips });
