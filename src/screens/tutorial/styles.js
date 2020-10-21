import { StyleSheet, Dimensions } from "react-native";
import { colorWithe, fontColor } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWithe,
    justifyContent: "space-around",
  },
  img: {
    width: Dimensions.get("window").width / 1.15,
    height: 320,
    alignSelf: "center",
  },
  lblDes: {
    color: fontColor,
    fontSize: 20,
    width: Dimensions.get("window").width / 1.2,
    alignSelf: "center",
    textAlign: "center",
  },
  lblTitle: {
    color: fontColor,
    fontSize: 29,
    width: Dimensions.get("window").width / 1.2,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 17,
  },
  btn: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
