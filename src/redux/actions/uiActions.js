import axiosInstance from "../../config/axiosInstance";
import { SET_STRINGS, TOGGLE_LOADING } from "../types";

export const setStrings = data => dispatch => {
  dispatch({ type: SET_STRINGS, payload: data });
};
