import { StyleSheet, Dimensions } from "react-native";
import { fontColor, colorCarousel } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageView: {
    flex: 2,
    width: Dimensions.get("window").width,
    backgroundColor: colorCarousel,
    padding: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "70%",
    width: "70%"
  },
  contentView: {
    flex: 2,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  lblTittle: {
    fontSize: 20,
    color: fontColor,
    fontWeight: "600"
  },
  text: {
    fontSize: 16,
    color: fontColor
  },
  btnNext: {
    position: "absolute",
    bottom: 20,
    right: 20
  }
});
