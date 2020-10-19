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
  lblHeader: {
    fontSize: 30,
    fontWeight: "500",
    color: fontColor,
    textAlign: "center",
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  ratingView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  lblDes: {
    fontSize: 19,
    color: fontColor,
    textAlign: "center",
    marginTop: 5,
    width: Dimensions.get("window").width / 1.2,
    alignSelf: "center",
  },
  interestsContainer: {
    marginTop: 16,
    marginBottom: 10,
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
  addressContainer: {
    flexDirection: "row",
    backgroundColor: colorLightGrayBg,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  lblAddress: {
    fontSize: 16,
    color: fontColor,
    marginLeft: 10,
    fontWeight: "600",
    width: "87%",
  },
});
