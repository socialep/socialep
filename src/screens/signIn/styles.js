import { StyleSheet, Dimensions } from "react-native";

import { fontColor } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  logo: {
    zIndex: 2,
    alignSelf: "center",
    marginTop: 80
  },
  logoBackGround: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    top: 70
  },
  header: {
    width: Dimensions.get("window").width,
    height: (107 + 200) / 2,
    position: "absolute",
    top: 0,
    left: 0
  },
  lblSignIn: {
    fontWeight: "800",
    fontSize: 30,
    marginVertical: 40,
    color: fontColor
  },
  btnSignIn:{
    marginTop: 20
  },
  btnPrivacy:{
    position: 'absolute',
    bottom: 20
  }
});
