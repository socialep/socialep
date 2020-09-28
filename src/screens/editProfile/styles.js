import { StyleSheet } from "react-native";
import {
  colorFocused,
  colorInterestCardBg,
  colorLightGrayBg,
} from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
    flexDirection: "column-reverse",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
  },
  headerView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  profileIcon: {
    width: 70,
    height: 70,
  },
  lblTitle: {
    fontSize: 36,
    color: colorFocused,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 10,
  },
  sectionContaienr: {
    padding: 20,
    backgroundColor: colorLightGrayBg,
  },
  photoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: colorLightGrayBg,
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
