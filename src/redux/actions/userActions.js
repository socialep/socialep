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
  console.log("facebook");
  await Facebook.initializeAsync("389365785280873");

  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile", "email"],
  });

  if (type === "success") {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getUserData = (userData) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_USER });
  try {
    //console.log(userData);
    const {
      data: { user, interestsFilled },
    } = await axiosInstance.get("/getUser", userData);

    dispatch({ type: SET_USER, payload: user });
    dispatch({ type: SET_LOGGED, payload: true });
    dispatch({ type: SET_INTERESTS_FILLED, payload: interestsFilled });
    dispatch({ type: TOGGLE_LOADING_USER });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING_USER });
  }
};

export const updateInterests = (interests) => async (dispatch) => {};

export const signOut = () => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_USER });
  try {
    await firebase.auth.signOut();
    dispatch({ type: SET_LOGGED, payload: false });
    dispatch({ type: TOGGLE_LOADING_USER });
  } catch (err) {
    dispatch({ type: TOGGLE_LOADING_USER });
  }
};
