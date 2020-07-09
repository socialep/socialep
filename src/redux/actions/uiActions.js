import axiosInstance from "../../config/axiosInstance";
import { SET_STRINGS, TOGGLE_LOADING, SET_OPPS } from "../types";

export const setStrings = (data) => (dispatch) => {
  dispatch({ type: SET_STRINGS, payload: data });
};

export const getOpps = (interests) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/getOpps", { interests });
    dispatch({type: SET_OPPS, payload: data})
    dispatch({ type: TOGGLE_LOADING });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING });
  }
};
