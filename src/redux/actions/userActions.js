import axiosInstance from "../../config/axiosInstance";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
import { Alert } from "react-native";
import {
  TOGGLE_LOADING_USER,
  SET_LOGGED,
  SET_USER,
  SET_INTERESTS_FILLED,
  TOGGLE_LOADING,
  SET_USERS_REGISTERED,
} from "../types";

export const signInGoogle = () => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_USER });
  try {
    await GoogleSignIn.initAsync({
      clientId:
        "com.googleusercontent.apps.266866452601-tf50lile57306ub9asv445pg6i6f1uke",
    });

    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();
    if (type === "success") {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const credential = firebase.auth.GoogleAuthProvider.credential(
        user.auth.idToken,
        user.auth.accessToken
      );
      const googleProfileData = await firebase
        .auth()
        .signInWithCredential(credential);
    }

    //Alert.alert("Sign In", `${user} \n ${googleProfileData}`);

    dispatch({ type: TOGGLE_LOADING_USER });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING_USER });
  }
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

export const registerForOpp = (formData, navigation) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/registerForOpp", formData);
    dispatch({ type: TOGGLE_LOADING });
    navigation.push("ThanksForRegister");
  } catch (err) {
    dispatch({ type: TOGGLE_LOADING });
    console.log(err);
  }
};

export const cancelRegistration = (reqData) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    const { data } = await axiosInstance.post("/cancelRegistration", reqData);
    dispatch({ type: SET_USERS_REGISTERED, data });
    dispatch({ type: TOGGLE_LOADING });
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const editProfile = (photoForm, id, data) => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  try {
    if (photoForm) await axiosInstance.post(`/changePhoto/${id}`, photoForm);

    await axiosInstance.post(`/editProfile/${id}`, data);

    const {
      data: { user },
    } = await axiosInstance.post("/getUser", { uid: id });

    dispatch({ type: SET_USER, payload: user });

    dispatch({ type: TOGGLE_LOADING });
  } catch (err) {
    const {
      data: { user },
    } = await axiosInstance.post("/getUser", { uid: id });

    dispatch({ type: SET_USER, payload: user });
    dispatch({ type: TOGGLE_LOADING });
  }
};
