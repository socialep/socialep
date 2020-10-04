import { StyleSheet, Dimensions } from "react-native";
import {
  colorInterestCardBg,
  fontColor,
  colorLightGrayBg,
} from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
  },
  scrollView: {},
  lblHeader: {
    fontSize: 30,
    color: fontColor,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },
  lblAsk: {
    fontSize: 20,
    color: fontColor,
    fontWeight: "500",
    marginBottom: 10,
  },
  askContainer: {
    backgroundColor: colorLightGrayBg,
    padding: 20,
    marginTop: 20,
  },
  labelStyle: {
    backgroundColor: colorLightGrayBg,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
