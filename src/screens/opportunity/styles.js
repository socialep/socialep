import { StyleSheet, Dimensions } from "react-native";
import {
  colorInterestCardBg,
  colorSignInHeader,
  fontColor,
  colorLightGrayBg,
} from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "86%",
    marginVertical: 12,
    alignSelf: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lblRating: {
    fontSize: 18,
    fontWeight: "200",
    marginLeft: 8,
  },
  btnSubscribe: {
    marginVertical: 16,
    alignSelf: "center",
  },
  btnSubscribeInside: {
    width: Dimensions.get("window").width / 1.8,
    borderRadius: 10,
  },
  lblName: {
    fontSize: 30,
    fontWeight: "100",
    color: colorSignInHeader,
    textAlign: "center",
  },
  lblDes: {
    fontSize: 24,
    color: fontColor,
    textAlign: "center",
    marginTop: 5,
    width: Dimensions.get("window").width / 1.2,
    alignSelf: "center",
  },
  interestsContainer: {
    marginTop: 16,
    backgroundColor: colorLightGrayBg,
    padding: 10,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  lblInterest: {
    fontSize: 24,
    color: fontColor,
    marginLeft: 10,
  },
  requirementsContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: colorLightGrayBg,
  },
  addressContainer: {
    flexDirection: "row",
    backgroundColor: colorLightGrayBg,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  lblAddress: {
    fontSize: 16,
    color: fontColor,
    marginLeft: 10,
    fontWeight: "600",
  },
  periodContainer: {
    marginVertical: 10,
    backgroundColor: colorLightGrayBg,
    padding: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  imgDuration: {
    width: 80,
    height: 80,
  },
  lblDuration: {
    fontSize: 16,
    color: fontColor,
    fontWeight: "600",
  },
});
