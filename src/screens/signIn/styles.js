import { StyleSheet, Dimensions } from "react-native";

import { colorSignInHeader } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    width: 107,
    height: 107,
    marginTop: 60,
    zIndex: 1
  },
  header: {
    width: Dimensions.get("window").width,
    height: (107 + 60) / 2,
    backgroundColor: colorSignInHeader,
    borderBottomRightRadius: 400,
    borderBottomLeftRadius: 400,
    position: "absolute",
    top: 0,
    left: 0
  }
});
