import { StyleSheet, Dimensions } from "react-native";
import {
  colorInterestCardBg,
  colorFocused,
  colorUnselected,
  colorLightGrayBg,
  fontColor,
  colorPrimary,
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
    width: 1500,
    height: 1500,
    position: "absolute",
    top: -1350,
    left: -530,
    backgroundColor: colorPrimary,
    borderRadius: 1000,
  },
  lblName: {
    color: colorFocused,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },
  nameEmail: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  lblEmail: {
    textAlign: "center",
    fontSize: 15,
    color: colorUnselected,
  },
  lblSection: {
    fontSize: 29,
    color: fontColor,
    textAlign: "center",
    width: "100%",
    fontWeight: "100",
    marginBottom: 10,
  },
  sectionContainer: {
    backgroundColor: colorLightGrayBg,
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  lbl: {
    fontSize: 15,
    color: fontColor,
    textAlign: "center",
  },
  lblPresentation:{
    fontSize: 20,
    color: fontColor,
    textAlign: "center",
  }
});
