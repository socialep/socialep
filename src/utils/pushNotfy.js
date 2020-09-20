import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

import axiosInstance from "../config/axiosInstance";

export const registerForPush = async (id) => {
  try {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (!permission.granted) return;

    const token = await Notifications.getExpoPushTokenAsync();

    //const token = (await Notifications.getExpoPushTokenAsync()).data;

    const reqData = {
      id,
      token,
    };

    console.log(token);

    const { data } = await axiosInstance.post("/uploadPushToken", reqData);

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
