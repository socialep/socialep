import { StyleSheet, Dimensions } from "react-native";

import { fontColor, colorSignInHeader } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    zIndex: 2,
    alignSelf: "center",
    marginTop: 80,
  },
  logoBackGround: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    top: 70,
  },
  header: {
    width: 1500,
    height: 1500,
    position: "absolute",
    top: -1350,
    left: -530,
    backgroundColor: colorSignInHeader,
    borderRadius: 1000,
  },
  lblSignIn: {
    fontWeight: "800",
    fontSize: 30,
    marginVertical: 40,
    color: fontColor,
  },
  btnSignIn: {
    marginTop: 20,
    width: Dimensions.get("window").width / 1.5,
  },
  btnPrivacy: {
    position: "absolute",
    bottom: 20,
  },
});
