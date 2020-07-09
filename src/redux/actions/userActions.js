import axiosInstance from "../../config/axiosInstance";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import {
  TOGGLE_LOADING_USER,
  SET_LOGGED,
  SET_USER,
  SET_INTERESTS_FILLED,
} from "../types";

export const signInGoogle = () => async (dispatch) => {
  console.log("google");
};

export const signInFaceBook = () => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_USER });
  await Facebook.initializeAsync("389365785280873");

  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile", "email"],
  });

  if (type === "success") {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    await firebase.auth().signInWithCredential(credential);
  }

  dispatch({ type: TOGGLE_LOADING_USER });
};

export const getUserData = (userData) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_USER });
  try {
    const {
      data: { interestsFilled, user },
    } = await axiosInstance.post("/getUser", userData);

    dispatch({ type: SET_USER, payload: user });
    dispatch({ type: SET_LOGGED, payload: true });
    dispatch({ type: SET_INTERESTS_FILLED, payload: interestsFilled });
    dispatch({ type: TOGGLE_LOADING_USER });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING_USER });
  }
};

export const updateInterests = (interests, id) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_USER });
  try {
    const { data } = await axiosInstance.post("/uploadInterests", {
      interests,
      id,
    });

    dispatch({ type: TOGGLE_LOADING_USER });
    dispatch({ type: SET_INTERESTS_FILLED, payload: true });
  } catch {
    dispatch({ type: TOGGLE_LOADING_USER });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();
    dispatch({ type: SET_LOGGED, payload: false });
  } catch (err) {
    console.log(err);
  }
};
