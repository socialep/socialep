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
  UPDATE_POST_LIKES,
} from "../types";

export const setStrings = (data) => (dispatch) => {
  dispatch({ type: SET_STRINGS, payload: data });
};

export const getOpps = (interests) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/getOpps", { interests });
    const aux = [];
    data.map((item) => {
      if (aux.length == 0) aux.push(item);
      else {
        let includes = false;
        aux.map((auxItem) => {
          if (auxItem.id === item.id) includes = true;
        });
        if (!includes) aux.push(item);
      }
    });
    dispatch({ type: SET_OPPS, payload: aux });
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

export const likePost = (userId, postId) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("/likePost", { userId, postId });
    dispatch({
      type: UPDATE_POST_LIKES,
      payload: { likes: data, postId: postId },
    });
  } catch (err) {
    console.log(err);
  }
};
