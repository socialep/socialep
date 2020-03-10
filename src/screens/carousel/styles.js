import { StyleSheet, Dimensions } from "react-native";
import { colorPrimary } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 2,
    width: Dimensions.get("window").width
  },
  contentView: {
    flex: 2,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontColor: colorPrimary
  },
  btnNext: {
    position: "absolute",
    bottom: 20,
    right: 20
  }
});
