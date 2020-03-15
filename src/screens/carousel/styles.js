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
    justifyContent: "space-around"
  },
  lblTittle: {
    fontSize: 20,
    color: fontColor,
    fontWeight: "600",
    alignSelf: "center"
  },
  text: {
    fontSize: 16,
    color: fontColor,
    alignSelf: "center",
    marginHorizontal: 20
  },
  btnNext: {
    alignSelf: "flex-end"
  }
});
