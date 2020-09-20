import { StyleSheet, Dimensions } from "react-native";
import {
  colorInterestCardBg,
  colorFocused,
  colorUnselected,
  colorLightGrayBg,
  fontColor,
} from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
  },
  logo: {
    zIndex: 2,
    alignSelf: "center",
    marginTop: 82,
  },
  logoBackGround: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    top: 70,
  },
  header: {
    width: Dimensions.get("window").width,
    height: (107 + 200) / 2,
    position: "absolute",
    top: 0,
    left: 0,
  },
  lblName: {
    color: colorFocused,
    fontSize: 26,
    textAlign: "center",
    fontWeight: "700",
  },
  nameEmail: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  lblEmail: {
    textAlign: "center",
    fontSize: 21,
    color: colorUnselected,
  },
  interestsContainer: {
    marginTop: 16,
    backgroundColor: colorLightGrayBg,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    width: "50%",
  },
  lblInterest: {
    fontSize: 20,
    color: fontColor,
    marginLeft: 10,
    width: "60%",
    textAlign: "center",
  },
});
