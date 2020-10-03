import axiosInstance from "../../config/axiosInstance";
import {
  SET_STRINGS,
  TOGGLE_LOADING,
  SET_OPPS,
  SET_POSTS,
  SET_FAVS,
  SET_FAVS_LIST,
  SET_ORG,
  SET_OPP,
} from "../types";

export const setStrings = (data) => (dispatch) => {
  dispatch({ type: SET_STRINGS, payload: data });
};

export const getOpps = (interests) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/getOpps", { interests });
    dispatch({ type: SET_OPPS, payload: data });
    dispatch({ type: TOGGLE_LOADING });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.get("/getPosts");
    dispatch({ type: SET_POSTS, payload: data });
    dispatch({ type: TOGGLE_LOADING });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const getFavs = (favoritesOpportunities) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/getFavOpps", {
      favoritesOpportunities,
    });
    dispatch({ type: SET_FAVS, payload: data });
    dispatch({ type: TOGGLE_LOADING });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const uploadFavOpps = (oppId, favOpps, userId) => async (dispatch) => {
  try {
    const aux = [];
    if (favOpps.includes(oppId)) {
      favOpps.forEach((opp) => (opp === oppId ? {} : aux.push(opp)));
    } else {
      favOpps.forEach((opp) => aux.push(opp));
      aux.push(oppId);
    }

    dispatch({ type: SET_FAVS_LIST, payload: aux });

    const reqData = {
      favoritesOpportunities: aux,
      id: userId,
    };

    await axiosInstance.post("/uploadFavList", reqData);
  } catch (err) {
    console.log(err);
  }
};

export const uploadPostFavs = (reqData) => async (dispatch) => {
  try {
    await axiosInstance.post("/uploadOppLikes", reqData);
  } catch (err) {
    console.log(err);
  }
};

export const getOrg = (id) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/getOrgData", { id });
    dispatch({ type: TOGGLE_LOADING });
    dispatch({ type: SET_ORG, payload: data });
  } catch (err) {
    consolr.log(err);
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const setOpp = (opp) => async (dispatch) => {
  dispatch({ type: SET_OPP, payload: opp });
};
